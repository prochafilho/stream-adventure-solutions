const request = require("request");

const req = request.post("http://localhost:8099");

process.stdin.pipe(req).pipe(process.stdout);
