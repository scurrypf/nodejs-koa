const {suc,failure } = require('../../utils/res')
const {createToken} = require('../../service/token')
const { userValid , adminValid} = require('../../service/userValid')

async function loginCtl(ctx){
    let user = { 
        username: ctx.request.body.username,
        pass: ctx.request.body.pass
    }
    let valid = await userValid(user);
        if(valid){
            const token = createToken(ctx.request.body.username,ctx.request.body.pass);
            ctx.body = suc({token});
        }else{
            ctx.body = failure('请求失败','lll');
        }
}

async function adminLoginCtl(ctx){
    let user = { 
        username: ctx.request.body.username,
        pass: ctx.request.body.pass
    }
    let valid = await adminValid(user);
        if(valid){
            const token = createToken(ctx.request.body.username,ctx.request.body.pass);
            ctx.body = suc({token});
        }else{
            ctx.body = failure('请求失败','lll');
        }
}

module.exports = {
    loginCtl,
    adminLoginCtl,
}