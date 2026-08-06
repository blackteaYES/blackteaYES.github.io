---
date: 2021-07-24
title: SpringBoot整合Minio
categories:
  - minio
tag:
  - 开发
  - java
  - springboot整合
  - minio

---


# ![Minio](/assets/img/icons/minio.svg) SpringBoot整合Minio

## 搭建属于自己的对象储存服务及短链服务（Minio）

#### 文档地址

minio官方文档: https://docs.min.io/?ref=ob

minio 中文文档地址: http://docs.minio.org.cn/docs/master/java-client-api-reference

#### 备注 

不同版本的minio所实现的api和类是不同的,需要根据自己的需求版本进行实现,文档中的内容仅供参考，尤其是中文文档,版本过老,实际api调用方式已完全不同,建议以官方文档与实际版本源代码作为实现功能,本文使用 **版本 8.2.2**



## 本文版本

| versionv |                  内容                   |
| :------- | :-----------------------------------: |
| 1.0.0    | 初步实现,minio基础存储(获取)对象,通过redis缓存实现短链服务。 |
|          |                                       |



## 实现逻辑

#### 实现minio储存

业务版本: version_1.0.0

业务说明: 仅需实现 minio基础的储存功能与简单的短链服务

minio储存没什么好说的,参照文档与当前版本源码即可实现,

主要在短链的服务怎么实现稍微要讲一下,

1. 如何实现有效短链码?

   我这里直接设置了两个策略接口,一个用来校验短链码是否合理,一个用来生成短链码。

2. 如何储存短链码与实际储存对象的关系？

   可以设置一个关系储存接口,使用例如mongo、redis等的实现,我下面的实现是没有写这个接口,直接使用redis作为储存关系的实现。

   ​

###### 返回VO

```java
/**
* @auth: black tea
* @date: 2021/6/18 8:45
* @description: 
*		1.0.0 版本仅涉及到地址一部分属性;
*		以下大部分属性属于1.1.0的内容（例如锁定控制,无效控制,场景唯一id等）
*       1.1.0 可以精确控制是否可以访问该资源,可以设置该对象资源的私有功能,满足部分敏感文件不可以被公共访* 问的业务等,还可以将用户已经放弃的对象资源进行释放,减少服务资源空间的浪费!
*/
public class UploadBaseVo implements Serializable {

    private static final long serialVersionUID = 2763738636057411330L;

    /** 文件原名称 -前端用于文件名称替换 **/
    private String fileName;
    /** 长链原地址 **/
    private String url;
    /** 短链地址 **/
    private String shortUrl;
    /** 是否锁定,锁定后无法进行访问 **/
    private boolean isLock;
    /** 是否无效 **/
    private boolean isInvalid;
    /** 无效枚举 **/
    private UploadFileConstant.UploadFileInvalidEnum invalidEnum;
    /** 锁定或无效原因 **/
    private String lockOrInvalidCause;
    /** 最后有效时间 **/
    private Date lastEffectiveTime;
    /** 上传的客户端类型 **/
    private UploadFileConstant.uploadClientType clientType;
    /** 场景id - 唯一 - 非必有 **/
    private String sceneId;
    /** 销毁枚举 **/
    private UploadFileConstant.DestroyEnum destroyEnum;

    /**
     * return true 表示超时
     * @param date 比较的时间
     * @return boolean
     */
    public boolean isTimOut(Date date){
       return date.getTime() - lastEffectiveTime.getTime() > 0;
    }
}
```



###### 上传对象文件

```java
public MinioUploadVo upload(MultipartFile file, UploadBaseDto dto) throws IOException, InvalidKeyException, InvalidResponseException, InsufficientDataException, NoSuchAlgorithmException, ServerException, InternalException, XmlParserException, ErrorResponseException {
        if (dto instanceof MinioUploadDto){
            MinioUploadDto uploadDto = (MinioUploadDto) dto;
            String bucketName = uploadDto.getBucketName();
            if (Validator.isEmpty(bucketName)){
                bucketName = MinioConstant.DEFAULT_STORAGE_BUCKET;
            }
            boolean isExist = minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build());
            if (isExist) {
                log.info("存储桶已经存在！");
            } else {
                //创建存储桶并设置只读权限
                minioClient.makeBucket(MakeBucketArgs.builder().bucket(bucketName).build());
                SetBucketPolicyArgs setBucketPolicyArgs = SetBucketPolicyArgs.builder().bucket(bucketName).config(MinioConstant.PolicyType.READ_ONLY.toString()).build();
                minioClient.setBucketPolicy(setBucketPolicyArgs);
            }
            String filename = file.getOriginalFilename();
            // 设置存储对象名称
            String objectName = DateUtil.format(new Date(), "yyyyMMdd") + "/" + filename;
            // 使用putObject上传一个文件到存储桶中
            String fileContent = file.getContentType();
            if (file.getContentType().contains("ISO-8859-1")){
                fileContent = fileContent.replace("ISO-8859-1", "UTF-8");
            }
            PutObjectArgs putObjectArgs = PutObjectArgs.builder()
                    .bucket(bucketName)
                    .contentType(fileContent)
                    .object(objectName)
                    .stream(file.getInputStream(), file.getSize(), PutObjectArgs.MIN_MULTIPART_SIZE)
                    .build();
            ObjectWriteResponse objectWriteResponse = minioClient.putObject(putObjectArgs);
            log.info("文件上传成功,对象:{}", JSONUtil.toJsonStr(objectWriteResponse));
            MinioGetObjectDto getObjectDto = new MinioGetObjectDto();
            getObjectDto.setBucketName(bucketName);
            getObjectDto.setFileName(filename);
            getObjectDto.setObjectName(objectName);
            MinioUploadVo vo = this.getObject(getObjectDto);
            vo.setSceneId(dto.getSceneId());
            String url = vo.getShortUrl();
            String path = URLUtil.getPath(url);
            String path1 = path.substring(1, path.length());
            // 这里默认使用的是redis的储存短链策略
            redisUtils.set(UploadFileConstant.filePrefix + path1.charAt(0) + "::" + path1,vo);
            return vo;
        }else {
            log.error("上传失败,因为当前调用的服务(minioService),入参类型dto错误!");
        }
        return null;
    }
```



###### 获取对象文件地址

```java
 public MinioUploadVo getObject(UploadBaseDto dto) throws IOException, InvalidResponseException, InsufficientDataException, NoSuchAlgorithmException, ServerException, InternalException, XmlParserException, ErrorResponseException, InternalException, InvalidKeyException {
        if (dto instanceof MinioGetObjectDto){
            MinioGetObjectDto getObjectDto = (MinioGetObjectDto) dto;
            String bucketName = getObjectDto.getBucketName();
            String objectName = getObjectDto.getObjectName();
            if (Validator.isEmpty(bucketName)){
                bucketName = MinioConstant.DEFAULT_STORAGE_BUCKET;
            }
            GetPresignedObjectUrlArgs getPresignedObjectUrlArgs = GetPresignedObjectUrlArgs.builder()
                    .method(Method.GET)
                    .bucket(bucketName)
                    .object(objectName)
                    .build();
            String url = minioClient.getPresignedObjectUrl(getPresignedObjectUrlArgs);
            getObjectDto.setUrl(url);
            return build(getObjectDto,new MD5Strategy(),7,null);
        }else {
            log.error("错误");
        }
       return null;
    }
```



###### 短链服务实现

先增加两个策略接口！

1: 校验短链码是否重复接口? 

```java
@FunctionalInterface
public interface CheckShortUrlStrategy<T> {

    /**
     * 短链接地址是否重复, 重复 true
     * @param
     * @return
     */
    boolean isRepeat(T t);

}

```

2: 自定义生成短链码的接口?

```java
@FunctionalInterface
public interface UrlToShortUrlStrategy {

    /**
     * 长链接转短连接
     * @param url 长链接
     * @return String
     */
    String toShortUrl(String url, int resultLength);
}
```



最终调用接口实现短链服务  ↓↓↓↓

```java
 /**
 *  生成返回客户端的vo
 */
private MinioUploadVo build(MinioGetObjectDto dto, UrlToShortUrlStrategy strategy, int length, CheckShortUrlStrategy checkShortUrlStrategy){
        MinioUploadVo vo = new MinioUploadVo();
        vo.setSceneId(dto.getSceneId());
        vo.setBucketName(dto.getBucketName());
        vo.setObjectName(dto.getObjectName());
        vo.setFileName(dto.getFileName());
        String url = dto.getUrl();
        vo.setUrl(url);
        if (null == strategy){
            strategy = this.defaultBuildShortUrlStrategy();
        }
        String shortUrl = new UrlTpShortUrlContext(strategy).execute(url, length);
        while (this.shortUrlCheck(checkShortUrlStrategy,shortUrl)){
            shortUrl = new UrlTpShortUrlContext(strategy).execute(url, length);
        }
        vo.setShortUrl(shortUrl);
        vo.setClientType(UploadFileConstant.uploadClientType.MINIO_CLIENT);
        return vo;
    }

	// 判断是否满足短链的策略
    private boolean shortUrlCheck(CheckShortUrlStrategy strategy,String shortUrl){
        if (null == strategy) {
          // 短链策略默认实现校验短链码是否重复！
            strategy = this.defaultCheckStrategy();
        }
        return strategy.isRepeat(shortUrl);
    }

	
    private CheckShortUrlStrategy<String> defaultCheckStrategy(){
        return url -> {
            String path = URLUtil.getPath(url);
            // 取url首位作为 :: 第二重
            String path1 = path.substring(1, path.length());
            UploadBaseVo uploadBaseVo = (UploadBaseVo) redisUtils.get(UploadFileConstant.filePrefix + path1.charAt(0) + "::" + path1);
            // 是否存在?
            return Validator.isNotNull(uploadBaseVo) && Validator.isNotEmpty(uploadBaseVo.getShortUrl());
        };
    }

    private UrlToShortUrlStrategy defaultBuildShortUrlStrategy(){
        // 默认采用随机值策略
        return new RandomStrategy();
    }
```



## 效果图

- Minio 服务

<!-- ![组合模式逻辑图](/assets/img/设计模式/创作型模式/组合模式逻辑图.png) -->

![minio管理后台登录页面](/assets/img/minio/minio管理后台登录页面.png)


![minio管理后台首页](/assets/img/minio/minio管理后台首页.png)

其他的功能不做介绍，自己看下文档即可。



- 单元测试
  ​
![单元测试minio上传文件](/assets/img/minio/单元测试minio上传文件.png)


[^上传结果]: 结果json

![解析minio上传返回的json](/assets/img/minio/解析minio上传返回的json.png)

实际短链效果 -> 访问: http://localhost/iymQvia

![短链接效果访问](/assets/img/minio/短链接效果访问.png)