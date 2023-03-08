var xxtea = require('xxtea-node');

var prefix = `29hgfhdfv78344`;
// {"uid": "aad104638f914feeb4ba214b929e716f", "isVip": 1, "member_type": 2, "member_title": "\u7ec8\u8eab\u7248 A", "expire_on": "\u6c38\u4e45\u6709\u6548", "auth_quantity": 5, "function_list": [1, 2, 3, 4, 5], "timestamp": 1678248156, "ts": 2}
// var str = `{"deviceList": [{"user_id": 452643, "uid": "a846dd9a126b4b2ebdefd3e6acbe66d7", "is_vip": 1, "member_type": 0, "expire_on": "2999-12-31 09:00", "auth_quantity": 0, "auth_mail": null, "is_primary": 0, "last_login_time": "2023-02-15T09:06:24.193085", "desc": "452643(iPhone)", "function_list": "[1,2,3,4,5]", "trail_status": 0, "member_title": "PayNe Pro"}], "timestamp": 1676423184, "ts": 0}`;
// var encrypt_data = xxtea.encrypt(xxtea.toBytes(str), xxtea.toBytes(key));
// console.log(new Buffer(encrypt_data).toString('base64'));
// var decrypt_data = xxtea.toString(xxtea.decrypt(encrypt_data, xxtea.toBytes(key)));
// var decrypt_data = xxtea.toString(xxtea.decrypt('42R6uT+atfWnDTvGPfGbxjNavX7QNvZ7VFUICRsO9ZvI/dKPusu56VttHiXayZclnpeVjkfAp1vTcdTaeI/DEUPrSDUaEyi07MjwVdFMH+y1lhjDQaDmuhA7ULmM92S0AIjs537mkgU=', xxtea.toBytes(key)));
let uid = `a965e6d3b47444e9b65853caa3b0d820`
// let uid = `aad104638f914feeb4ba214b929e716f`
let encStr = `H/qwFnwesMd9XD605eNhmUo8V6xBiT4DtErL1VuBfUO3xHEZycXSEBdRr3CCIjFRRlHxRyQG885fKgO8SSWu8mOFZ6iYumXX6h5waeB2y5VUNXnopv0izaLMoWa2uDILpN93wMFr2O1liqbp6qtLqk6cuDaHr9ALcf0paf8C8e1Qkq1jcvl+ansnR0GhxJ5MswMzmSSRi5oOxx15w2bGsgi/yfG//gEhug3QGExxKTbfEa2S4Q5r0rzwr7SPU7xCA+SWNd6Y9iDAUGDcOGSmuYmuyGN6wWh/XZJkRxshe5G7SzmO`
console.log(stormDecrypt(encStr,uid));
// console.log(stormEncrypt(`{"order_id": "202303081101333889214", "member_type": 0, "timestamp": 1678244493, "ts": 0}`,uid))
// console.log(stormEncrypt(`{"product_id":"","s":"CE1F013E-FDB8-47ED-82B2-0A8E082500B1"}`,uid))

function stormEncrypt(data,uid){
    return new Buffer(xxtea.encrypt(xxtea.toBytes(data), xxtea.toBytes(prefix + uid))).toString('base64');
}

function stormDecrypt(data,uid){
    return xxtea.toString(xxtea.decrypt(data, xxtea.toBytes(prefix + uid)));
}

module.exports={stormEncrypt, stormDecrypt}