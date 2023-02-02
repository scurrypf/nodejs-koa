//请求成功返回的"成功值"
function suc(data){
    return {
        success:true,
        data,
        statuscode:1,
    }
}
//请求成功返回的"失败值"
function failure(msg,statuscode = -1){
    return {
        success:false,
        msg,
        statuscode,
    }
}

module.exports = {
    suc,
    failure,
    
}