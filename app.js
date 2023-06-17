const {stormEncrypt,stormDecrypt} = require('./stormSniffer');
/*
* 构建各个app接口地址及请求参数
*
* */
function buildPostData(headers,obj){
    let platform = obj.platform;
    let data = {
        method: 'POST'
    };
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
            let headers = {
                // 'host': obj.host,
                'user-agent':'ZhihuHybrid osee2unifiedRelease/14614 osee2unifiedReleaseVersion/9.8.0 Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                'authorization': 'Bearer 2.1gSrrRAAAAAAAANPqRQOCFgsAAABgAlVNqmK1ZAB1gMhIkc_LYbNm0nTNYpmTSwIFDg',
                'x-ms-id': 'D2EMIDp76rUcOy2MIt14RA6NVHoEEU/v7M2zO1NIkbShEX88',
                'Cookie': 'KLBRSID=af132c66e9ed2b57686ff5c489976b91|1687026875|1687025270; _zap=ecce317b-443a-42fa-9488-8d0b447c3793; _xsrf=SAidKYN4zJxDrdir4FOni6pConYz4Xpa; z_c0=2|1:0|10:1687026875|4:z_c0|92:Mi4xZ1NyclJBQUFBQUFBQU5QcVJRT0NGZ3NBQUFCZ0FsVk5xbUsxWkFCMWdNaElrY19MWWJObTBuVE5ZcG1UU3dJRkRn|8588ce56a7c14f909b45b9e13f4e93aea4910a9a7fcb390e5f849950ce7536a6; _xsrf=XWjzQjZkW6qnf8cWRzrK44iDh2mWwXHo; z_c0=2|1:0|10:1687027554|4:z_c0|92:Mi4xZ1NyclJBQUFBQUFBQU5QcVJRT0NGZ3NBQUFCZ0FsVk5xbUsxWkFCMWdNaElrY19MWWJObTBuVE5ZcG1UU3dJRkRn|e3f8f370ab2b2f8ef9f590a66b331fc4e25d8b7a0068bc933b2bfc1baed185be; KLBRSID=af132c66e9ed2b57686ff5c489976b91|1687027999|1687025270',
                'x-zse-93': '101_2_1.0',
                'x-app-version': '9.8.0',
                'x-udid': 'AADT6kUDghZLBcvMuBwGZAyRT8jeppYGNis=',
                'x-zse-96': '1.0_e8rXQRLuELkUEDmHh8tzievIC5JYSPEMQ1NatLsUorE/ZRaivPlMnYTJCY9x+z1j',
                'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
            };
            data = {
                url: obj.url,
                method: 'GET',
                data: obj.data,
                headers: headers
            }
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
