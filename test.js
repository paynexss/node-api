var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.zhihu.com/people/self',
  'headers': {
    'authorization': 'Bearer 2.1gSrrRAAAAAAAANPqRQOCFgsAAABgAlVNqmK1ZAB1gMhIkc_LYbNm0nTNYpmTSwIFDg',
    'x-ms-id': 'D2EMIDp76rUcOy2MIt14RA6NVHoEEU/v7M2zO1NIkbShEX88',
    'Cookie': 'KLBRSID=af132c66e9ed2b57686ff5c489976b91|1687026875|1687025270; _zap=ecce317b-443a-42fa-9488-8d0b447c3793; _xsrf=SAidKYN4zJxDrdir4FOni6pConYz4Xpa; z_c0=2|1:0|10:1687026875|4:z_c0|92:Mi4xZ1NyclJBQUFBQUFBQU5QcVJRT0NGZ3NBQUFCZ0FsVk5xbUsxWkFCMWdNaElrY19MWWJObTBuVE5ZcG1UU3dJRkRn|8588ce56a7c14f909b45b9e13f4e93aea4910a9a7fcb390e5f849950ce7536a6; _xsrf=XWjzQjZkW6qnf8cWRzrK44iDh2mWwXHo; z_c0=2|1:0|10:1687027554|4:z_c0|92:Mi4xZ1NyclJBQUFBQUFBQU5QcVJRT0NGZ3NBQUFCZ0FsVk5xbUsxWkFCMWdNaElrY19MWWJObTBuVE5ZcG1UU3dJRkRn|e3f8f370ab2b2f8ef9f590a66b331fc4e25d8b7a0068bc933b2bfc1baed185be; KLBRSID=af132c66e9ed2b57686ff5c489976b91|1687027999|1687025270',
    'x-zse-93': '101_2_1.0',
    'x-app-version': '9.8.0',
    'x-udid': 'AADT6kUDghZLBcvMuBwGZAyRT8jeppYGNis=',
    'x-zse-96': '1.0_e8rXQRLuELkUEDmHh8tzievIC5JYSPEMQ1NatLsUorE/ZRaivPlMnYTJCY9x+z1j'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
