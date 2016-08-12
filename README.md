# node server

项目目录结构
├── .mssql.json #为mssql命令行使用的配置文件
├── README.md
├── RELEASE.md #重大发布的发布日志
├── app.js #http服务器入口
├── auth #认证相关
├── common #通用组件
├── conf #配置文件，mongo，redis服务器启动所使用的配置文件统一管理
├── config #根据NODE_ENV加载的不同配置文件
├── controllers
├── gulpfile.js #gulp serve自动重启服务器
├── models #model设计
├── netServer.js #socket服务器入口，用于umeng推送
├── package.json
├── routes #路由表
├── scripts #脚本
└── services #业务逻辑代码
