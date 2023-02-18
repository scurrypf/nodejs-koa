const KoaRouter = require('koa-router')
const {loginCtl,adminLoginCtl} = require('../controller/login/index');
const {uploadSingle} = require('../controller/upload/uploadSingle');
const {uploadMultip} = require('../controller/upload/uploadMultip');
const {queryAll,queryUserFont,queryAdminall,queryPlayer,queryPlayerall,queryPlayerdata,queryPlayerdataall,querySales,querySalesall} = require('../controller/SQL/select');
const {addUser,addPlayer,addPlayerdata,addSales} = require('../controller/SQL/add');
const {deleteUser,deletePlayer,deletePlayerdata,deleteSales} = require('../controller/SQL/delete');
const {updateUser,updatePlayer,updatePlayerdata,updateSales,updateAdmin} = require('../controller/SQL/update');


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

//登录路由
router.post('/login',loginCtl);
router.post('/adminlogin',adminLoginCtl);
router.get('/admin/select',queryAdminall);
router.post('/admin/update',updateAdmin);

// 上传文件
router.post('/uploadsingle',uploadSingle);
router.post('/uploadmulti',uploadMultip);

// 用户表CRUD
router.get('/queryall',queryAll);
router.post('/select',queryUserFont);
router.post('/sql/adduser',addUser);
router.post('/sql/delete',deleteUser);
router.post('/sql/update',updateUser);

// 球员表CRUD
router.post('/player/select',queryPlayer);
router.post('/player/add',addPlayer);
router.post('/player/delete',deletePlayer);
router.post('/player/update',updatePlayer);
router.get('/player/queryall',queryPlayerall);

// 球员数据表CRUD
router.post('/playerdata/select',queryPlayerdata);
router.post('/playerdata/add',addPlayerdata);
router.post('/playerdata/delete',deletePlayerdata);
router.post('/playerdata/update',updatePlayerdata);
router.get('/playerdata/queryall',queryPlayerdataall);

// 球员薪资表CRUD
router.post('/playersale/select',querySales);
router.post('/playersale/add',addSales);
router.post('/playersale/delete',deleteSales);
router.post('/playersale/update',updateSales);
router.get('/playersale/queryall',querySalesall);

module.exports = {
    router
}