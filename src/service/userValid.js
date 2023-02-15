const { queryUser ,queryAdmin } = require('../controller/SQL/select')
const { getHash } = require('../utils/cypto')

async function userValid(user){
    // 这里调用函数取数据时要使用await
    let arr = await queryUser();
    // let passHash = getHash(user.pass);
    for(let i = 0 ; i < arr.length ; i++){
        if(user.username == arr[i].username && user.pass == arr[i].pass){
            return true;
        }
    }
    return false;
}

async function adminValid(user){
    // 这里调用函数取数据时要使用await
    let arr = await queryAdmin();
    // let passHash = getHash(user.pass);
    for(let i = 0 ; i < arr.length ; i++){
        if(user.username == arr[i].user && user.pass == arr[i].pass){
            return true;
        }
    }
    return false;
}

module.exports = {
    userValid,
    adminValid,
}