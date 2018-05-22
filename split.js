const split = require("split");
const through = require("through2");

let count = 1;

process.stdin
  .pipe(split())
  .pipe(
    through(function(line, _, next) {
      let text =
        count % 2 === 0
          ? line.toString().toUpperCase()
          : line.toString().toLowerCase();
      console.log(text);
      count++;
      next();
    })
  )
  .pipe(process.stdout);
