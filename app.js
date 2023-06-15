const {stormEncrypt,stormDecrypt} = require('./stormSniffer');
/*
* 构建各个app接口地址及请求参数
*
* */
function buildPostData(obj){
    let platform = obj.platform;
    let data = {};
    switch (platform) {
        case 'lsp':
            data = {
                url: 'http://49.232.18.217/api/crypto',
                data: "flag=encrypt&platform=caomei&plaintext=1111",
                headers: {
                    'content-type': `application/x-www-form-urlencoded; charset=UTF-8`,
                    // 'content-type': `application/json;charset=utf-8`,
                }
            };
            break;
        case 'zhihu':
            break;
        case 'ximalaya':
            break;
        default:
            break;
    }
    return data;
}
function buildLocalData(obj){
    let platform = obj.platform;
    let args = obj.data;
    switch (platform) {
        case 'stormSniffer':
            let uid = obj.key;
            /*let decrypt = stormDecrypt(args,uid);
            let parse = JSON.parse(decrypt);
            setStormData(parse);
            if (parse.hasOwnProperty("deviceList")) {
                let device = parse.deviceList[0];
                setStormData(device);
                parse.deviceList[0] = device;
            }*/
            let t = new Date().getTime().toString().substr(0,10);
            let retStr = `{"uid": "${uid}", "isVip": 1, "member_type": 1, "member_title": "https://t.me/paynegroup", "expire_on": "随时失效,支持正版", "auth_quantity": 99, "function_list": [1, 2, 3, 4, 5], "timestamp": ${t}, "ts": 0}`
            obj.data = stormEncrypt(retStr, uid);
            break;
        default:
            break;
    }
    return obj;
}
function setStormData(parse) {
    if (parse.hasOwnProperty("isVip")) {
        parse.isVip = 1;
    }
    if (parse.hasOwnProperty("expire_on")) {
        parse.expire_on = '2099-12-31 08:00';
    }
    if (parse.hasOwnProperty("member_title")) {
        parse.member_title = 'PayNe Pro';
    }
    if (parse.hasOwnProperty("function_list")) {
        parse.function_list = [1, 2, 3, 4, 5];
    }
}
module.exports={buildPostData, buildLocalData}
