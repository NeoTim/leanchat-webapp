## leanchat-webapp

网页地址：http://leanchat.avosapps.com/

这个项目主要用来方便测试 LeanChat。比较简单。更复杂的 Web IM 项目可参考 [LeanMessageDemo](http://leancloud.github.io/leanmessage-demo/) 以及它的 [Github 项目](https://github.com/leancloud/leanmessage-demo)。

LeanChat 项目构成：

* [leanchat-android](https://github.com/leancloud/leanchat-android)，Android 客户端
* [leanchat-ios](https://github.com/leancloud/leanchat-ios)，iOS 客户端
* [leanChat-webapp](https://github.com/leancloud/leanchat-webapp)，Web 客户端
* [leanchat-cloud-code](https://github.com/leancloud/leanchat-cloudcode)，服务端。

## 开发

这个 Web 项目用了前端构建工具 Yeoman 和 gulp 来管理。放在了此 repo 的 [webapp 目录](https://github.com/leancloud/leanchat-cloudcode/tree/master/webapp)。如果您需要在此基础上开发程序的话，需要您阅读 [yeoman 文档](http://yeoman.io/)来安装环境。首先是通过 `sudo npm install -g yo` 来安装 yeoman，其次 按照 [yeoman 的说明](http://yeoman.io/learning/index.html)，先自己创建一个 yeoman 项目。这样基本上搭好了环境。可到 webapp 目录运行命令来调试，主要命令有两个：

* `gulp serve`，这用来启动本地 server，然后打开 http://localhost:9000 即可调试，如图：
![changed1](https://cloud.githubusercontent.com/assets/5022872/8589118/29ffcf0a-2645-11e5-9ef6-a06513f7d860.png)

* `gulp build`，用来 uglify 代码等，编译成最后的生产代码和 style ，输出到了 ./public 里，那么基于 LeanEngine 的约定，会从这里读取文件，所以部署之后就可以看到网站了。
![changed](https://cloud.githubusercontent.com/assets/5022872/8589168/b9345362-2645-11e5-8bd4-5bb78753c07e.png)

