const http = require("http");
const through = require("through2");
const stream = through(write);

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}
const server = http.createServer(function(req, res) {
  if (req.method === "POST") {
    req.pipe(stream).pipe(res);
  } else {
    res.end();
  }
});
server.listen(process.argv[2]);
