const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const os = require('os');
const {getData} = require('./api');
const {buildPostData,buildLocalData} = require('./app');
const e = require("express");

app.use(express.static("./"));
app.post('/api/post', function (req, res) {
    // res.setHeader('Content-Type', 'text/plain;charset=utf8');
    res.setHeader('Content-Type', 'application/json');
    // console.log(JSON.stringify(req.body))
    let body = req.body;
    if (req.body.type === 'local') {
        let data = buildLocalData(req.body);
        console.log(new Date().toLocaleString()+'----'+JSON.stringify(data));
        res.end(JSON.stringify(data.data));
    } else if (req.body.type === 'net') {
        let data = buildPostData(req.body);
        getData(data).then((rev)=>{
            //console.log(rev);
            res.end(rev)
        })
    }

})
const server = app.listen(88, function (req, res, next) {
    let host = server.address().address
    let port = server.address().port
    console.log("http://%s:%s", host, port)
})
