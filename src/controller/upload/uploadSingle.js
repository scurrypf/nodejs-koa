const {suc,failure } = require('../../utils/res');

function uploadSingle(ctx){
    console.log(ctx.request.files.img.newFilename)
    ctx.body = suc({ imageUrl:`http://127.0.0.1:3000/download/${ctx.request.files.img.newFilename}`})
}

module.exports = {
    uploadSingle,
}