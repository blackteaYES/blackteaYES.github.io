---
date: 2020-07-10
categories:
  - docker
tag:
  - 运维
  - docker 

---
# docker学习

## 感谢

**b站尚谷硅周阳讲师**: https://www.bilibili.com/video/BV1Ls411n7mx?p=34


## docker常用命令

```docker
docker version : 查看docker版本信息

docker info : 查看docker基本信息

docker --help :  查看docker指令帮助,类似linux的man指令
```


## docker镜像命令

### docker images

&emsp;&emsp;查看本地可以运行的镜像模板

```docker
options: <!-- docker images-->

1. -a  : 查看本地所有镜像(含中间影像层)
2. -q :  只显示镜像id
3. --digests : 显示镜像的摘要信息
4. --no-trunc : 显示完整的镜像信息
```



### docker search  imageName

&emsp;&emsp; imageName(镜像名字),dockerhub上搜索镜像

```docker
options: <!--docker search-->

1. --no-trunc : 显示完整的镜像信息
2. -s : 列出收藏数(stars)不小于指定值的镜像
3. --automated : 只列出automated build类型的镜像
```



### docker pull imageName:tag

&emsp;&emsp;imageName(镜像名字),tag(版本) , dockerhub上拉取镜像,不写tag,默认拉取最新版本(latest)



### docker rmi imageName:tag/imageId

&emsp;&emsp;imageId(镜像id)，imageName(镜像名字),tag(版本) , 删除镜像时，可以选择id或名称

```docker
options: <!--docker rmi-->

1. docker rmi -f 镜像id : 删除单个镜像
2. docker rmi -f 镜像id 镜像id : 删除多个镜像
3. docker rmi -f $(docker images -qa) : 删除所有镜像,-qa 获得所有镜像的id(具体去看docker images指令)
```



## docker容器指令

### 新建并启动容器 

&emsp;&emsp;docker run [options] image [command] [agr...]

&emsp;&emsp;例子:

&emsp;&emsp;docker run -it imagId : 新创立容器,启动并进入容器内部根目录

&emsp;&emsp;docker run -d -p 8001:8080 --name myTomcat01 tomcat :  新创立、启动容器,并将容器命名为myTomcat01,将容器内部8080端口映射至虚拟机8001端口, docker exec -it myTomcat01 /bin/bash 进入容器根目录


```docker
options : <!--docker run [options]-->

1. --name :  隔一个空格,给当前新创立的容器起名称,例如: -- name myNginx

2. -d : 后台运行容器,并返回容器id,同时启动守护式容器（备注:开启后台运行,必须有前台处理，否则会关闭容器）

3. -i : 以交互模式启动容器,通常与-t同时使用

4. -t : 为容器重新分配一个伪输入终端

5. -P : 随机端口映射

6. -p : 指定端口映射,有以下四种:

   1. ip:hostPort:containerPort

   2. ip::containerPort

   3. hostPort:containerPort

   4. containerPort

      举例子: - p 8001:8080 -> (tomcat端口映射)
```



### 退出容器内部

<ol style="padding-left: 3em;">
    <li>exit : 容器停止退出</li>
    <li>ctrl + P + Q : 容器不停止退出</li>
</ol>

### 启动容器

&emsp;&emsp;docker start containerName/containerId


### 重启容器

&emsp;&emsp;docker restart containerName/containerId


### 停止容器

&emsp;&emsp;docker stop/kill containerName/containerId

<ol style="padding-left: 3em;">
    <li>stop ： 慢慢停止容器(备注:启动时 -d ,守护式不会停止)</li>
    <li>kill ： 强制停止容器</li>
</ol>


### 删除容器

&emsp;&emsp;docker rm/rm -f containerName/containerId

1. rm : 删除没有运行的容器
2. rm -f : 强制删除,即使在运行
3. 删除全部容器
   1. docker rm -f $(docker ps -a -q)
   2. docker ps -a -q | xargs docker rm


### docker ps

&emsp;&emsp;查看有哪些容器已经启动

```docker
options :  <!--docker ps [options]-->

1. -a : 列出当前所有正在运行的容器 +  历史上运行过的
2. -l : 显示最近创建的容器
3. -n : 显示最近n个创建的容器
4. -q : 静默模式,只显示容器编号
5. --no-trunc : 不截断输出,完整信息显示
```



### 查看容器日志

&emsp;&emsp;docker logs -f -t --tail 容器id/容器name

```
options: 

1. -t : 是加入时间戳
2. -f : 跟随最新的日志打印
3. -- tail : 数字，显示最后多少条
```



### 查看容器内运行的进程

&emsp;&emsp;docker top 容器id/容器name




### 查看容器内部细节

&emsp;&emsp;docker inspect 容器id/容器name




### 进入正在运行的容器并以命令行交互

<ol style="padding-left: 3em;">
    <li>docker exec -it 容器id/容器name : 直接进入容器启动命令的终端,不会启动新的进程(备注:不加 /bin/bash 的话不会进入到容器内部,但是可以在在指令结尾加入 容器内部指令,会返回信息,例如: docker exec -it 容器id ls -l /tmp)</li>
    <li>docker attach 容器id/容器name : 直接进入容器启动命令的终端,不会启动新的进程</li>
</ol>



### 从容器内拷贝文件到主机上

&emsp;&emsp;docker cp 容器id/容器name:容器路径 目标主机路径(外部主机)

&emsp;&emsp;例如: docker cp myTomcat01:/tmp/假设存在.txt /usr。




### 镜像commit

&emsp;&emsp;提交容器副本使其成为一个新的镜像,docker ps就可以查看到新生成的镜像

&emsp;&emsp;docker commit -m="提交的描述信息" -a="作者" 容器id 要创建的(image:tag)目标镜像名称:[标签名]

&emsp;&emsp;例如:

&emsp;&emsp;&emsp;&emsp;docker commit -m="tomcat test commit 1" -a="yy" myTomcat01 atyy/mytomcat:1.1



## 容器数据卷

### 指令方式添加 :  -v 指令

&emsp;&emsp;docker run -it/-d -v /宿主机绝对路径:/容器目录 镜像名/镜像id (备注:不存在路径会自动创建的)

&emsp;&emsp;功能: 

​	&emsp;&emsp;可以实现容器与宿主机之间数据共享

​	&emsp;&emsp;容器停止退出后,主机修改后数据还是同步的

​    &emsp;&emsp;可以设置容器目录是否可以读写(备注:宿主机单向修改文件),例如:

&emsp;&emsp;docker run -it/-d -v /宿主机绝对路径:/容器目录:ro 镜像名/镜像id ,docker inspect 查看volumesRW  - > false

<ol style="padding-left: 5em;">
    <li>查看是否挂载成功,docker inspect</li>
</ol>

![查看是否挂载成功](/assets/img/Docker学习/查看是否挂载成功.png)



### DockerFile添加 : 

1. 创建dockerfile的文件夹,用于存放dockerfile文件

2. 在dockrfile文件中使用**VOLUME**指令来给镜像添加一个或多个数据卷

   ```dockerfile
   VOLUME ["/dataVolumeContainer1","/dataVolumeContainer2"]
   ```

3. file构建

   ```dockerfile
   编写dockerfile文件:
   以下功能类似: docker run -it -v 宿主机绝对路径:/dataVolumeContainer1 -v 宿主机绝对路径:/dataVolumeContainer2 centos /bin/bash
   
   FROM centos
   # 容器内部数据卷位置,只可以写容器内部 
   VOLUME ["/dataVolumeContainer1","/dataVolumeContainer2"]  
   CMD echo "test dockerfile success"
   CMD /bin/bash
   ```

4. build生成镜像

   ```docker
   docker build -f /docker/DockerFilePack/DockerFile -t yy/centos .
   解析: 
   	-f : dockerfile文件目录
   	-t : 命名空间,构建的镜像名字
   	 . : 镜像构建过程中的上下文环境的目录
   ```

5. run 创建生成容器

   ```docker
   docker run -it 容器id/容器name
   
   备注:docker挂载主机目录docker访问出现cannot open directory .:Permission denied
   解决办法: 在挂载目录后多加一个 --privileged=true 参数即可
   例如: docker run -it -v /宿主机绝对路径:/容器路径 --privileged=true imagesName/imageId
   ```

   ​	容器内部数据卷位置如下图:

![容器内部数据卷位置](/assets/img/Docker学习/容器内部数据卷位置.png)

   

6. 查看启动容器时不指定宿主机容器数据卷,docker默认指定的容器数据卷位置

   ```docker
   docker inspect 容器id/容器name
   ```

   可以看到所在的默认容器数据卷的位置:

![默认容器数据卷的位置](/assets/img/Docker学习/默认容器数据卷的位置.png)

  &emsp;&emsp; 可以看到里面的目录:

![默认容器数据卷里面的目录](/assets/img/Docker学习/默认容器数据卷里面的目录.png)



### 容器间传递共享

```docker
docker run -it --name 容器name/容器id --volumes-from 被继承(容器name/容器id) 镜像name/镜像id
```

&emsp;&emsp;可以实现容器间数据卷的共享(增删查改会影响继承到的容器数据卷)，即使删除容器，只要不删除完所有相同继承的容器，那么容器卷数据就不会被删除，即使被继承容器删除，子容器还是有相同数据。 

**结论: 容器之间配置信息的传递,数据卷的生命周期一直持续到没有容器使用它为止。**



## dockerfile 详解

### 保留字指令

1. FROM : 基础镜像,当前新镜像是基于那个镜像的

2. MAINTAINER ：镜像维护者的姓名和邮箱地址

3. RUN ：容器构建时需要运行的命令

4. EXPOSE ：当前容器对外暴露出的端口

5. WORKDIR ：指定在创建容器后,终端默认登录进来的工作目录,一个落脚点

6. ENV : 用来构建镜像过程中设置的环境变量

7. ADD : 将宿主机目录下的文件拷贝进镜像且ADD命令会自动处理URL和解压tar压缩包

8. COPY ：类似ADD,拷贝文件和目录到镜像中。将从构建上下文目录中<源路径>的文件/目录复制到新的一层的镜像内的<目标路劲>位置 ,如下:

   ```dockerfile
   1. COPY src dest
   
   2. COPY ["src","dest"]
   ```

9. VOLUME : 容器数据卷,用于数据保存和持久化工作

10. CMD : 指定一个容器启动时要运行的指令;Dockerfile中可以有多个CMD指令,但只有最后一个生效,CMD会被docker run之后的参数替换。

11. ENTRYPOINT ：指定一个容器启动时要运行的命令;ENTRYPOINT的目的和CMD一样,都是在指定容器启动程序及参数

12. ONBUILD : 当构建一个被继承的Dockerfile时运行命令,父镜像在被子继承后父镜像的ONBUILD被触发



**小总结如下图**:

![dockerfile小总结](/assets/img/Docker学习/dockerfile小总结.png)



### 案例

&emsp;&emsp;自定义同个tomcat镜像:

![自定义同个tomcat镜像](/assets/img/Docker学习/自定义同个tomcat镜像.png)



### 本地镜像提交到阿里云

1. 创建阿里云镜像仓库。

![创建阿里云镜像仓库](/assets/img/Docker学习/创建阿里云镜像仓库.png)

2. 进入创建好的仓库管理。

![进入创建好的仓库管理](/assets/img/Docker学习/进入创建好的仓库管理.png)

3. 根据第二步的提示，去登录阿里云Docker Registry,将镜像构建后推送到阿里云仓库。

![镜像构建后推送到阿里云仓库](/assets/img/Docker学习/镜像构建后推送到阿里云仓库.png)

4. 去阿里云镜像搜索提交上去的镜像(注:只有仓库是公开的其他人才可以搜索到)。

![阿里云镜像搜索提交上去的镜像](/assets/img/Docker学习/阿里云镜像搜索提交上去的镜像.png)
