const {suc,failure} = require('../utils/res');
const {verifyToken} = require('../service/token');

const whiteList = [
    '/api/login',
    '/',
    '/download',
    '/api/adminlogin'
]

const isValid = async function(ctx,next){
    const url = ctx.request.url.split('?')[0]
    if( ctx.request.method === 'OPTIONS' || whiteList.includes(url) || verifyToken(ctx.request.header.token)){
        await next()
    }else{
        ctx.body = failure('TOKEN已失效')
    }
}

module.exports = {
   isValid,
}