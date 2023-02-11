/*
* 构建各个app接口地址及请求参数
*
* */
function buildData(obj){
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
module.exports={buildData}