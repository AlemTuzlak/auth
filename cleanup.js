const fs = require("fs");

fs.unlink("cleanup.js", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("cleanup.js deleted");
});
