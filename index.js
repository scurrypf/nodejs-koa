//类或者构造函数首字母大写
const Koa = require('koa');
const KoaStatic = require('koa-static');
const KoaMount = require('koa-mount');
const { koaBody } = require('koa-body');
const path = require('path');
const {router} = require('./src/router/index');
const koaCors = require('@koa/cors');
const { isValid} = require('./src/middleware/koa-jwt')

//创建一个koa应用
const app = new Koa();

let UPLOAD_URL = path.join(__dirname,'./static')
let DOWNLOAD_URL = "http://127.0.0.1:3000/download"



//处理请求和响应
//中间件
//静态文件服务器
app.use(KoaStatic('./static',{
    setHeaders(res){
        // 设置http响应报文key-value，报文的数据保存为附件
        res.setHeader('content-disposition','attachment')
    }
}))
const DownLoad = KoaStatic('./static',{
    setHeaders(res){
        // 设置http响应报文key-value，报文的数据保存为附件
        res.setHeader('content-disposition','attachment')
    }
})
//网站托管
const WebSite = KoaStatic('./dist');



///download下载路径
app.use(KoaMount('/download',DownLoad));
//默认路径打开网站
app.use(KoaMount('/',WebSite))

app.use(isValid);

// const midFun = (ctx) =>{
//     ctx.body = 'Hello World';
// }
// app.use(midFun);

// 支持查询参数
// 支持body[form-data;x-www-urlencoded;json;text/plain]
app.use(koaBody({
    //解析form-data格式
    multipart:true,
    formidable:{
        uploadDir:UPLOAD_URL,
    }
}));
// app.use(async(ctx,next)=>{
//     console.log(ctx.request.files.image.newFilename)
//     ctx.body = {
//         params:ctx.request.query,
//         url:ctx.request.URL,//绝对路径
//         urls:ctx.request.url,//相对路径
//         method:ctx.request.method,
//         body:ctx.request.body,
//         imageUrl:`${DOWNLOAD_URL}/${ctx.request.files.image.newFilename}`
//     }
//     await next();
// })

//使用@koa/cors,解决跨域问题
app.use(koaCors());

//使用router
app.use(router.routes()).use(router.allowedMethods());

//启动服务器，监听端口
app.listen(3000,'127.0.0.1',()=>{
    console.log('server is listening on http://127.0.0.1:3000')
})