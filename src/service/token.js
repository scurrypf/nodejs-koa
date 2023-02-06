/**
 * token结构
 * header.payload.signature
 * header: 给算法
 * payload: 用户自定义数据
 * signature: header.alg(header + payload + secret)
 */
// token create
// token 是有时间的
const Jwt = require('jsonwebtoken');
const SECRIT_KEY = '781514kokolll';

function createToken(playload){
    const token = Jwt.sign({
        playload,
        // token有效期
        exp: Math.floor(Date.now() / 1000) + (60 * 60 *24) 
    },SECRIT_KEY)
    return token;
}

// verify token(验证token)
function verifyToken(token) {
    try {
        const tokenData = Jwt.verify(token, SECRIT_KEY)
        return tokenData;
    } catch (err) {
        console.log(err)
        return false;
    }
}
module.exports = {
    createToken,
    verifyToken,
}

// token刷新