const KoaRouter = require('koa-router')
const {loginCtl} = require('../controller/login/index');
const {uploadSingle} = require('../controller/upload/uploadSingle')


const router = new KoaRouter({
    //前置路径，即该router下面默认加上该前缀
    prefix:'/api'
})

//请求方法，请求路径，以及响应该请求的函数
//当一次请求可以返回值时，无论返回的是"成功"还是"失败"，
//这都是一次成功的响应，
//是否成功响应体现在状态码中，而非请求体当中
router.get('/login',(ctx)=>{
    ctx.body = suc({
        url:ctx.request.URL,
        params:ctx.request.query,
        url:ctx.request.URL,//绝对路径
        urls:ctx.request.url,//相对路径
        method:ctx.request.method,
        body:ctx.request.body,
    })
    // ctx.body = {
    //     url:ctx.request.URL,
    //     params:ctx.request.query,
    //     url:ctx.request.URL,//绝对路径
    //     urls:ctx.request.url,//相对路径
    //     method:ctx.request.method,
    //     body:ctx.request.body,
    // }
})

router.post('/file',(ctx)=>{
    ctx.body = failure('就是请求失败啦llllll','lll')
    // ctx.body = ctx.request.body
})

router.post('/login',loginCtl)

router.post('/uploadsingle',uploadSingle)

module.exports = {
    router
}