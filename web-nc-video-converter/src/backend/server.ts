
import http from 'http';
import Busboy from 'busboy';
import path from 'path';

// const http = require('http');
// const busboy = require('busboy');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/upload') {
    const busboy = Busboy({ headers: req.headers });

    const files: any[] = [];

    busboy.on('file', (name, file, info) => {
      const { filename, mimeType } = info;
      let size = 0;

      file.on('data', (data) => {
        size += data.length;
      });

      file.on('end', () => {
        files.push({
          filename,
          size,
          format: mimeType,
        });
      });
    });

    busboy.on('finish', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(files));
    });

    req.pipe(busboy);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('🚀 Servidor en http://localhost:3000');
});