"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var busboy_1 = require("busboy");
// const http = require('http');
// const busboy = require('busboy');
var server = http_1.default.createServer(function (req, res) {
    if (req.method === 'POST' && req.url === '/upload') {
        var busboy = (0, busboy_1.default)({ headers: req.headers });
        var files_1 = [];
        busboy.on('file', function (name, file, info) {
            var filename = info.filename, mimeType = info.mimeType;
            var size = 0;
            file.on('data', function (data) {
                size += data.length;
            });
            file.on('end', function () {
                files_1.push({
                    filename: filename,
                    size: size,
                    format: mimeType,
                });
            });
        });
        busboy.on('finish', function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(files_1));
        });
        req.pipe(busboy);
    }
    else {
        res.writeHead(404);
        res.end();
    }
});
server.listen(3000, function () {
    console.log('🚀 Servidor en http://localhost:3000');
});
