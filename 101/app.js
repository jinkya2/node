/*
const http = require("http");
const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello node");
});

server.listen(port, hostname, () => {
  console.log(`server listening on http://${hostname}:${port}/`);
  console.log(process.argv);    // {env variables like key1=value1} node app.js {arguments like value1 key1=value1}  
                                // ['\\NODE\PATH','\\CODE\PATH', 'value1', 'key1=value1']
                                // use minimist libarry for key value accessible array. liek-
                                // const args = require('minimist')(process.argv.slice(2)); args['name'] //joe
});
*/

const car = require("./file1");

console.log(car);
