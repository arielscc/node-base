import http, { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  res.end('Hello Worldes!');
}).listen(3000);

server.on('listening', () => {
  console.log('Server is listening on port 3000');
});


