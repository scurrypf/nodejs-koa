const {suc,failure } = require('../../utils/res')
const { isValid } = require('../../middleware/koa-jwt');
const {createToken} = require('../../service/token')
const { userValid } = require('../../service/userValid')

async function loginCtl(ctx){
    let user = { 
        username: ctx.request.body.username,
        pass: ctx.request.body.pass 
    }
        if(userValid(user)){
            const token = createToken(ctx.request.body.username,ctx.request.body.pass);
            ctx.body = suc({token});
        }else{
            ctx.body = failure('请求失败','lll')
        }
}

module.exports = {
    loginCtl,
}