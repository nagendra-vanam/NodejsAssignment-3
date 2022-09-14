const http = require("http");
const fs = require("fs");
const YourName = "Nagendra";
const datatobeshown = `<h1> Hello World </h1>
                      <p> This is ${YourName}... </p>`;
fs.writeFile("./index.html", datatobeshown, (err, output) => {
  if (!err) {
    console.log("file created");
  }
});
const server = http.createServer((req, res) => {
  const data = fs.readFile("./index.html", "utf-8", (err, data) => {
    if (data) {
      res.writeHead(200, {
        "content-type": "text/html",
      });
      res.end(data);
    } else {
      comsole.log(err);
    }
  });
});
server.listen(5000, () => {
  console.log("server listening at  port 5000");
});
