// 动态网站开发:实现成绩查询功能

// 1.创建服务器
const http = require("http");
const path = require('path');
const fs = require('fs');


http.createServer((req, res) => {
    // 路由：（请求路径+请求方式）
    // 查询成绩的入口地址 /chaxun
    if (req.url.startsWith("/chaxun") && req.method == "GET") {
        fs.readFile(path.join(__dirname, 'index.html', 'utf-8', (err, content) => {
            if (err) {
                res.head(500, {
                    'Content-Type': 'text/plain; charset=utf8';
                });
                res.end("服务器错误");
            }
            res.content;
        }))
    } else if (req.url.startsWith("/chengji") && req.method == "POST") {
        // 查询结果 /chengji

    }

}).listen(3030, () => {
    console.log("Server is running.....");
})