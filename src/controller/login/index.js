const {suc,failure } = require('../../utils/res')

function loginCtl(ctx){
    if(ctx.request.body.username === 'kokomi' && ctx.request.body.pass === '123456'){
        ctx.body = suc({ token:'ZPFLLLKOKOMI' })
    }else{
        ctx.body = failure('请求失败','lll')
    }
}

module.exports = {
    loginCtl,
}