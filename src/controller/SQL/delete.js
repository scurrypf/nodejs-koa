const Mysql = require('mysql2/promise');
const {suc,failure } = require('../../utils/res');

async function deleteUser(ctx) {
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    let {id} = ctx.request.body;
    // let sql = "DELETE FROM `user` WHERE `username` ='" + username + "'";
    // let sql = `DELETE FROM user WHERE username ='${username}'`;
    let sql = `DELETE FROM user WHERE (id ='${id}')`;
    const isValid = await mysqlIns.execute(sql);
    if(isValid[0].affectedRows){
        ctx.body = suc({msg:"删除成功"})
    }else{
        ctx.body = suc("删除失败");
    }
}

async function deletePlayer(ctx) {
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    let {id} = ctx.request.body;
    let sql = `DELETE FROM player WHERE (id ='${id}')`;
    const isValid = await mysqlIns.execute(sql);
    if(isValid[0].affectedRows){
        ctx.body = suc({msg:"删除成功"})
    }else{
        ctx.body = suc("删除失败");
    }
}

async function deletePlayerdata(ctx) {
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    let {name} = ctx.request.body;
    let sql = `DELETE FROM playerdata WHERE (name ='${name}')`;
    const isValid = await mysqlIns.execute(sql);
    if(isValid[0].affectedRows){
        ctx.body = suc({msg:"删除成功"});
    }else{
        ctx.body = suc("删除失败");
    }
}

async function deleteSales(ctx) {
    const mysqlIns = await Mysql.createConnection({
        host:'127.0.0.1', 
        user: 'root', 
        database: 'nodejs-koa', 
        password: '781514', 
        port: 3306,
        // 设置数据库查询UTF-8
        charset:'UTF8_GENERAL_CI'
    });
    let {name} = ctx.request.body;
    let sql = `DELETE FROM playsale WHERE (name ='${name}')`;
    const isValid = await mysqlIns.execute(sql);
    if(isValid[0].affectedRows){
        ctx.body = suc({msg:"删除成功"});
    }else{
        ctx.body = suc("删除失败");
    }
}

module.exports = {
    deleteUser,
    deletePlayer,
    deletePlayerdata,
    deleteSales,
}