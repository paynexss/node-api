var xxtea = require('xxtea-node');

var prefix = `29hgfhdfv78344`;
// var str = `{"deviceList": [{"user_id": 452643, "uid": "a846dd9a126b4b2ebdefd3e6acbe66d7", "is_vip": 1, "member_type": 0, "expire_on": "2999-12-31 09:00", "auth_quantity": 0, "auth_mail": null, "is_primary": 0, "last_login_time": "2023-02-15T09:06:24.193085", "desc": "452643(iPhone)", "function_list": "[1,2,3,4,5]", "trail_status": 0, "member_title": "PayNe Pro"}], "timestamp": 1676423184, "ts": 0}`;
// var encrypt_data = xxtea.encrypt(xxtea.toBytes(str), xxtea.toBytes(key));
// console.log(new Buffer(encrypt_data).toString('base64'));
// var decrypt_data = xxtea.toString(xxtea.decrypt(encrypt_data, xxtea.toBytes(key)));
// var decrypt_data = xxtea.toString(xxtea.decrypt('42R6uT+atfWnDTvGPfGbxjNavX7QNvZ7VFUICRsO9ZvI/dKPusu56VttHiXayZclnpeVjkfAp1vTcdTaeI/DEUPrSDUaEyi07MjwVdFMH+y1lhjDQaDmuhA7ULmM92S0AIjs537mkgU=', xxtea.toBytes(key)));
// console.log(stormDecrypt(''));

function stormEncrypt(data,uid){
    return new Buffer(xxtea.encrypt(xxtea.toBytes(data), xxtea.toBytes(prefix + uid))).toString('base64');
}

function stormDecrypt(data,uid){
    return xxtea.toString(xxtea.decrypt(data, xxtea.toBytes(prefix + uid)));
}

module.exports={stormEncrypt, stormDecrypt}