const { createHash } = require('crypto');

function getHash(str){
    const hashUtil = createHash('sha256')
    hashUtil.update(str)
    return hashUtil.digest('base64');
}

module.exports = {
    getHash,
}