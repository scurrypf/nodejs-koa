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
    const rows = await mysqlIns.execute(`SELECT * FROM user;`)
    ctx.body = suc(rows[0]);
    return rows[0];
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
    let {start} = ctx.request.body;
    console.log(start);
    const rows = await mysqlIns.execute(`SELECT * FROM user LIMIT ${start}, 5`);
    ctx.body = suc(rows[0]); 
    return rows[0];
}

async function queryAdmin(ctx){
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    const rows = await mysqlIns.execute(`SELECT * FROM admin;`);
    return rows[0];
}

async function queryAdminall(ctx){
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    const rows = await mysqlIns.execute(`SELECT * FROM admin;`);
    ctx.body = suc(rows[0]);
    return rows[0];
}

async function queryPlayer(ctx){
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    let {start} = ctx.request.body;
    console.log(start);
    const rows = await mysqlIns.execute(`SELECT * FROM player LIMIT ${start}, 6`);
    ctx.body = suc(rows[0]); 
    return rows[0];
}

async function queryPlayerall(ctx){
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    const rows = await mysqlIns.execute(`SELECT * FROM player`);
    ctx.body = suc(rows[0]); 
    return rows[0];
}

async function queryPlayerdata(ctx){
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    let {start} = ctx.request.body;
    console.log(start);
    const rows = await mysqlIns.execute(`SELECT * FROM playerdata LIMIT ${start}, 6`);
    ctx.body = suc(rows[0]); 
    return rows[0];
}

async function queryPlayerdataall(ctx){
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    const rows = await mysqlIns.execute(`SELECT * FROM playerdata`);
    ctx.body = suc(rows[0]); 
    return rows[0];
}

async function querySales(ctx){
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    let {start} = ctx.request.body;
    console.log(start);
    const rows = await mysqlIns.execute(`SELECT * FROM playsale LIMIT ${start}, 6`);
    ctx.body = suc(rows[0]); 
    return rows[0];
}

async function querySalesall(ctx){
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    const rows = await mysqlIns.execute(`SELECT * FROM playsale`);
    ctx.body = suc(rows[0]); 
    return rows[0];
}

module.exports = {
    queryAll,
    queryUser,
    queryUserFont,
    queryAdmin,
    queryPlayer,
    queryPlayerall,
    queryPlayerdata,
    queryPlayerdataall,
    querySales,
    querySalesall,
    queryAdminall
}