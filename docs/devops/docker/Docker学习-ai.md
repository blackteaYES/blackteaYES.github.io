---
date: 2026-08-23
title: docker学习-AI整理版
categories:
  - docker
tag:
  - 运维
  - docker
footer: docker学习-AI整理版

---
# ![Docker](/assets/img/icons/docker.svg) docker学习-AI整理版

> 基于 [docker学习](./Docker学习.md) 重新整理。
>
> 目标不是"把原文再说一遍"，而是把内容改成更适合学习、复习、回看的笔记结构。

## 这份笔记怎么读

原文是跟着尚硅谷课程记下的 Docker 命令与概念笔记（2020 年）。整理版按"命令速查 → 数据卷 → Dockerfile"三层组织：先会用命令，再理解数据怎么持久化，最后学会自己构建镜像。

参考课程：[b站尚硅谷周阳讲师](https://www.bilibili.com/video/BV1Ls411n7mx?p=34)

## 学习路线图

| 阶段 | 重点 | 说明 |
| --- | --- | --- |
| 入门 | 常用/镜像命令 | 会查版本、搜镜像、拉取、删除 |
| 核心 | 容器命令 | run 的选项、生命周期、进入容器、看日志 |
| 持久化 | 容器数据卷 | -v 挂载、Dockerfile VOLUME、容器间共享 |
| 进阶 | Dockerfile | 保留字指令、build 构建自定义镜像 |
| 分发 | 推送镜像 | commit + 推送到阿里云仓库 |

---

## 一、基础命令

| 命令 | 作用 |
| --- | --- |
| `docker version` | 查看版本信息 |
| `docker info` | 查看基本信息 |
| `docker --help` | 指令帮助，类似 linux 的 man |

## 二、镜像命令

| 命令 | 作用 | 常用选项 |
| --- | --- | --- |
| `docker images` | 查看本地可用镜像 | `-a` 含中间层；`-q` 只显示 id；`--digests` 摘要；`--no-trunc` 完整信息 |
| `docker search 名称` | 在 DockerHub 搜镜像 | `--no-trunc` 完整信息；`-s` 收藏数下限；`--automated` 只列自动构建 |
| `docker pull 名称:tag` | 拉取镜像，不写 tag 默认 latest | — |
| `docker rmi id/名称:tag` | 删除镜像 | `-f` 强制；多个镜像空格分隔；`docker rmi -f $(docker images -qa)` 删除全部 |

## 三、容器命令

### 1. 新建并启动：docker run

```docker
docker run [options] image [command] [arg...]
```

| 选项 | 作用 |
| --- | --- |
| `--name` | 给新容器命名，如 `--name myNginx` |
| `-d` | 后台运行并返回容器 id（守护式容器；后台运行必须有前台进程处理，否则容器会自动关闭） |
| `-i` | 交互模式启动，通常与 `-t` 同时使用 |
| `-t` | 分配伪输入终端 |
| `-P` | 随机端口映射 |
| `-p` | 指定端口映射，四种写法：`ip:hostPort:containerPort`、`ip::containerPort`、`hostPort:containerPort`、`containerPort` |

典型例子：

```docker
# 新建容器，启动并进入容器内部根目录
docker run -it imageId

# 后台启动 + 端口映射 + 命名，然后进入
docker run -d -p 8001:8080 --name myTomcat01 tomcat
docker exec -it myTomcat01 /bin/bash
```

### 2. 生命周期命令

| 操作 | 命令 |
| --- | --- |
| 退出容器（停止） | `exit` |
| 退出容器（不停止） | `Ctrl + P + Q` |
| 启动 | `docker start 容器名/id` |
| 重启 | `docker restart 容器名/id` |
| 慢慢停止 | `docker stop 容器名/id` |
| 强制停止 | `docker kill 容器名/id` |
| 删除已停止的容器 | `docker rm 容器名/id` |
| 强制删除（运行中也删） | `docker rm -f 容器名/id` |
| 删除全部容器 | `docker rm -f $(docker ps -a -q)` 或 `docker ps -a -q \| xargs docker rm` |

### 3. 观察与调试命令

| 命令 | 作用 |
| --- | --- |
| `docker ps` | 查看已启动容器；`-a` 含历史、`-l` 最近一个、`-n N` 最近 N 个、`-q` 只显示编号、`--no-trunc` 完整输出 |
| `docker logs -f -t --tail N 容器` | 查看日志；`-t` 加时间戳、`-f` 跟随最新、`--tail N` 显示最后 N 条 |
| `docker top 容器` | 查看容器内运行的进程 |
| `docker inspect 容器` | 查看容器内部细节（JSON） |
| `docker exec -it 容器 /bin/bash` | 进入运行中的容器并交互（推荐） |
| `docker attach 容器` | 直接进入容器启动命令的终端，不启动新进程 |
| `docker cp 容器:容器路径 主机路径` | 从容器拷贝文件到主机，如 `docker cp myTomcat01:/tmp/a.txt /usr` |

> `exec` 与 `attach` 的区别：`exec` 是在容器中打开新的终端（不加 `/bin/bash` 也可以直接在指令结尾跟容器内命令，如 `docker exec -it 容器 ls -l /tmp` 会直接返回结果）；`attach` 直接进入容器启动命令的终端。

### 4. 镜像 commit

提交容器副本生成新镜像：

```docker
docker commit -m="提交的描述信息" -a="作者" 容器id 目标镜像名:[标签名]

# 例
docker commit -m="tomcat test commit 1" -a="yy" myTomcat01 atyy/mytomcat:1.1
```

---

## 四、容器数据卷

### 1. 命令方式挂载（-v）

```docker
docker run -it/-d -v /宿主机绝对路径:/容器目录 镜像名
```

- 路径不存在会自动创建；
- 容器与宿主机数据共享；容器停止退出后，主机修改的数据依然同步；
- 加 `:ro` 设置容器目录只读（宿主机单向修改）：`-v /宿主机绝对路径:/容器目录:ro`（`docker inspect` 可看到 `volumesRW → false`）；
- 挂载是否成功用 `docker inspect` 查看：

![查看是否挂载成功](/assets/img/Docker学习/查看是否挂载成功.png)

### 2. Dockerfile 方式（VOLUME 指令）

```dockerfile
FROM centos
# 容器内部数据卷位置，只能写容器内部路径
VOLUME ["/dataVolumeContainer1","/dataVolumeContainer2"]
CMD echo "test dockerfile success"
CMD /bin/bash
```

效果类似 `docker run -it -v 宿主机路径:/dataVolumeContainer1 -v 宿主机路径:/dataVolumeContainer2 centos /bin/bash`。

构建与运行：

```docker
# -f 指定 dockerfile 路径，-t 是构建的镜像名，. 是构建上下文目录
docker build -f /docker/DockerFilePack/DockerFile -t yy/centos .
docker run -it 容器id/容器名
```

> 常见报错：挂载主机目录后访问出现 `cannot open directory .: Permission denied`，在挂载目录后加 `--privileged=true` 解决。

容器内部数据卷位置：

![容器内部数据卷位置](/assets/img/Docker学习/容器内部数据卷位置.png)

不指定宿主机目录时，docker 会分配默认数据卷位置，`docker inspect` 可查：

![默认容器数据卷的位置](/assets/img/Docker学习/默认容器数据卷的位置.png)

![默认容器数据卷里面的目录](/assets/img/Docker学习/默认容器数据卷里面的目录.png)

### 3. 容器间传递共享（--volumes-from）

```docker
docker run -it --name 新容器名 --volumes-from 被继承容器名 镜像名
```

- 容器间数据卷共享，增删改会同步到继承的容器；
- 删除容器不影响其他容器卷里的数据：即使被继承的容器删除，子容器仍保留相同数据；
- 数据卷的生命周期一直持续到没有容器使用它为止。

---

## 五、Dockerfile 保留字指令

| 指令 | 作用 |
| --- | --- |
| `FROM` | 基础镜像，新镜像基于哪个镜像 |
| `MAINTAINER` | 镜像维护者姓名和邮箱 |
| `RUN` | 容器构建时需要运行的命令 |
| `EXPOSE` | 容器对外暴露的端口 |
| `WORKDIR` | 创建容器后终端默认登录的工作目录 |
| `ENV` | 构建过程中设置环境变量 |
| `ADD` | 拷贝宿主机文件进镜像，且自动处理 URL 和解压 tar 包 |
| `COPY` | 类似 ADD，拷贝文件/目录到镜像；`COPY src dest` 或 `COPY ["src","dest"]` |
| `VOLUME` | 容器数据卷，用于数据保存和持久化 |
| `CMD` | 容器启动时要运行的指令；多个 CMD 只有最后一个生效，且会被 `docker run` 之后的参数替换 |
| `ENTRYPOINT` | 目的和 CMD 一样，指定启动程序及参数 |
| `ONBUILD` | 构建被继承的 Dockerfile 时运行命令；父镜像被子镜像继承后触发 |

小总结：

![dockerfile小总结](/assets/img/Docker学习/dockerfile小总结.png)

自定义 tomcat 镜像案例：

![自定义同个tomcat镜像](/assets/img/Docker学习/自定义同个tomcat镜像.png)

---

## 六、本地镜像推送到阿里云

1. 创建阿里云镜像仓库：

![创建阿里云镜像仓库](/assets/img/Docker学习/创建阿里云镜像仓库.png)

2. 进入仓库管理：

![进入创建好的仓库管理](/assets/img/Docker学习/进入创建好的仓库管理.png)

3. 按提示登录阿里云 Docker Registry，构建后推送到仓库：

![镜像构建后推送到阿里云仓库](/assets/img/Docker学习/镜像构建后推送到阿里云仓库.png)

4. 在阿里云镜像搜索提交的镜像（只有公开仓库才能被别人搜到）：

![阿里云镜像搜索提交上去的镜像](/assets/img/Docker学习/阿里云镜像搜索提交上去的镜像.png)

---

## 一页总结

- 镜像三板斧：`search` → `pull` → `rmi`；
- 容器核心：`docker run -d -p 主机端口:容器端口 --name 名字`，进容器用 `exec -it`；
- 数据不丢：`-v` 挂载（`ro` 只读），容器间 `--volumes-from` 共享，卷随最后一个使用者消亡；
- Dockerfile：`FROM` 定基础、`RUN` 做构建、`CMD` 定启动（会被 run 参数覆盖）、`ENTRYPOINT` 定入口；
- 分发：`commit` 固化容器为镜像 → push 到阿里云仓库。
