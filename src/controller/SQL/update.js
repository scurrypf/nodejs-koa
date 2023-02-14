const Mysql = require('mysql2/promise');
const {suc,failure } = require('../../utils/res');


async function updateUser(ctx) {
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    let {username,sex,pass,id} = ctx.request.body;
    // if(username){

    // }
    let sql = `UPDATE user SET username = '${username}' , sex = '${sex}', pass = '${pass}' WHERE id = '${id}'`;
    // const isValid = await 
    mysqlIns.execute(sql);
}

module.exports = {
    updateUser,
}