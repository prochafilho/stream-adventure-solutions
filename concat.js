const concat = require("concat-stream");

process.stdin.pipe(
  concat(body => {
    console.log(
      body
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  })
);
