const Mysql = require('mysql2/promise');
const {suc,failure } = require('../../utils/res');

async function queryAll(ctx) {
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    const [rows] = await mysqlIns.execute(`SELECT * FROM cj,xs where cj.xh = xs.xh;`)
    ctx.body = suc({rows});
    console.log(rows);
    // return rows;
}

async function queryUser(ctx){
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    const rows = await mysqlIns.execute(`SELECT * FROM user;`);
    return rows[0];
}

async function queryUserFont(ctx){
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    const rows = await mysqlIns.execute(`SELECT * FROM user;`);
    ctx.body = suc(rows[0]); 
    return rows[0];
}


module.exports = {
    queryAll,
    queryUser,
    queryUserFont
}