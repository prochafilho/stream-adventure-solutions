const trumpet = require("trumpet");
const through = require("through2");

const tr = trumpet();
const stream = through(function(buf, _, next) {});
tr
  .select(".loud")
  .createStream()
  .pipe(
    through(function(buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
    })
  );

process.stdin.pipe(tr).pipe(process.stdout);
