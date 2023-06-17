const {post} = require('./http');

const getData = (data) => post({
    url: data.url,
    method: data.method,
    headers: data.headers,
    body: data.data,
});

module.exports = {getData}