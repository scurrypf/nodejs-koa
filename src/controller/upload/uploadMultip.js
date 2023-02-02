const {suc,failure } = require('../../utils/res');

function uploadMultip(ctx){
    //console.log(ctx.request.files);
    const imgArray = [];
    //对象的遍历Object.keys().forEach()
    Object.keys(ctx.request.files).forEach( key =>{
        imgArray.push(`http://127.0.0.1:3000/download/${ctx.request.files[key].newFilename}`)
    })
    ctx.body = suc({
        imageUrls:imgArray,
    })
}

module.exports = {
    uploadMultip,
}