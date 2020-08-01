# RCSystem3-front

# 介绍
在第二版中，前端采用的是较为基础的javascript、html、css进行搭建，写出来的页面兼容性不好，而且不太美观，最重要的是不方便维护。第三版中使用Vue进行前端项目的搭建，前端和后端互不影响，各自开发，使用axios发送restful风格请求访问后端。使用vue的好处是开发逻辑明确，组件化开发的方式简化了后期维护的成本。通过调用echats和elementUI，加快了前端开发的进度。在项目完成后，可构建打包项目，之后将打包输出的文件复制到springboot的resource文件夹下的public文件夹中，启动springboot，访问index.html，即可看到前端项目成功的运行在后端服务器上，两者成功整合在一起，至此，项目合并完成。最后，使用maven进行打包，使用java -jar命令，即可将打包完成的jar包运行在服务器上。

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
