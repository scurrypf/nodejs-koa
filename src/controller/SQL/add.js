const Mysql = require('mysql2/promise');
const {suc,failure } = require('../../utils/res');
const { getHash } = require('../../utils/cypto');

async function addUser(ctx) {
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    // mysqlIns.execute(`INSERT INTO user(username, pass) values ('')`)
    let {username,sex,pass,post} = ctx.request.body;
    // TODO:这里正常需要对前端传来的数据进行一次校验
    // let passHash = getHash(pass);
    let sql = `INSERT INTO user(username,sex,pass,post) VALUES ('${username}' , '${sex}' , '${pass}' , '${post}')`;
    // 此处需要参数校验
    const isValid = await mysqlIns.execute(sql);
    if (isValid) {
        ctx.body = suc({ msg: '添加成功' })
    } else {
        ctx.body = failure('添加失败')
    }
}

async function addPlayer(ctx) {
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    let {name,number,height,weight,reach,play} = ctx.request.body;
    let sql = `INSERT INTO player(name,number,height,weight,reach,play) VALUES ('${name}' , '${number}' , '${height}' , '${weight}',
                                                                 '${reach}' , '${play}')`;
    const isValid = await mysqlIns.execute(sql);
    if (isValid) {
        ctx.body = suc({ msg: '添加成功' })
    } else {
        ctx.body = failure('添加失败')
    }
}

async function addPlayerdata(ctx) {
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
    let sql = `INSERT INTO playerdata(name,time,score,backboard,assist,stolen,block,EPM,LEBRON,RAPTOR,BPM) 
    VALUES ('${name}' , '${time}' , '${score}' , '${backboard}','${assist}' , '${stolen}' , '${block}' , '${EPM}',
    '${LEBRON}' , '${RAPTOR}' , '${BPM}')`;
    const isValid = await mysqlIns.execute(sql);
    if (isValid) {
        ctx.body = suc({ msg: '添加成功' })
    } else {
        ctx.body = failure('添加失败')
    }
}

async function addSales(ctx) {
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
    let sql = `INSERT INTO playsale(name,saletype,contract,currentsale,nextsale) VALUES ('${name}' , '${saletype}' , '${contract}' ,
     '${currentsale}', '${nextsale}')`;
    const isValid = await mysqlIns.execute(sql);
    if (isValid) {
        ctx.body = suc({ msg: '添加成功' })
    } else {
        ctx.body = failure('添加失败')
    }
}

module.exports = {
    addUser,
    addPlayer,
    addPlayerdata,
    addSales
}