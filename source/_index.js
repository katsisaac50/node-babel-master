import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
const index_page = fs.readFileSync(path.join(_dirname, './index.html'));

const PORT = 9100;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(index_page);
});

server.listen(PORT);
console.log(`server started on port ${PORT}`);