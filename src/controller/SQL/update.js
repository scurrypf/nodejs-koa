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
    let {username,sex,pass,id,post} = ctx.request.body;
    let sql = `UPDATE user SET username = '${username}' , sex = '${sex}', pass = '${pass}' , post = '${post}' WHERE id = '${id}'`;
    mysqlIns.execute(sql);
}

async function updateAdmin(ctx) {
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    let {user,sex,pass} = ctx.request.body;
    let sql = `UPDATE admin SET sex = '${sex}', pass = '${pass}' WHERE user = '${user}'`;
    mysqlIns.execute(sql);
}

async function updatePlayer(ctx) {
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    let {name,number,height,weight,reach,play,id} = ctx.request.body;
    let sql = `UPDATE player SET name = '${name}' , number = '${number}', height = '${height}' , weight = '${weight}' ,
                                reach = '${reach}' , play = '${play}' WHERE id = '${id}'`;
    mysqlIns.execute(sql);
}

async function updatePlayerdata(ctx) {
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    let {name,time,score,backboard,assist,stolen,block,EPM,LEBRON,RAPTOR,BPM} = ctx.request.body;
    let sql = `UPDATE playerdata SET time = '${time}', score = '${score}' ,
    backboard = '${backboard}' , assist = '${assist}' , stolen = '${stolen}' , 
    block = '${block}' ,EPM = '${EPM}' , LEBRON = '${LEBRON}' ,RAPTOR = '${RAPTOR}' , BPM = '${BPM}' WHERE name = '${name}'`;
    mysqlIns.execute(sql);
}

async function updateSales(ctx) {
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    let {name,saletype,contract,currentsale,nextsale} = ctx.request.body;
    let sql = `UPDATE playsale SET saletype = '${saletype}', contract = '${contract}' ,
    currentsale = '${currentsale}' , nextsale = '${nextsale}'  WHERE name = '${name}'`;
    mysqlIns.execute(sql);
}

module.exports = {
    updateUser,
    updatePlayer,
    updatePlayerdata,
    updateSales,
    updateAdmin
}