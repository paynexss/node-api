const request = require('request');
function post(param){
    return new Promise((resolve, reject)=>{
        // console.log(JSON.stringify(param.body))
        var headers = {
            // 'User-Agent': `Mozilla/5.0 (Linux; Android 11; Pixel 3 XL Build/RQ3A.210605.005; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.62 XWEB/2893 MMWEBSDK/20210601 Mobile Safari/537.36 MMWEBID/8128 MicroMessenger/8.0.7.1920(0x28000737) Process/appbrand0 WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android`,
        };
        var option ={
            url: param.url,
            method: param.method,
            headers: {...headers, ...param.headers},
            body: param.body
        }
        request(option, function(error, response, data) {
            if (!error && response.statusCode == 200) {
                resolve(data)   // 返回response的内容
            }else{
                reject(error);   // 返回错误信息
            }
        });
    }).catch(error => console.log('caught', error));
}

module.exports={post}
