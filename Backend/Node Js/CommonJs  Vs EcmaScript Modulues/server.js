// // const http = require('node:http');

// // const fs=require('fs')
// import http from "http";


// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>hello world</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


import {a, b, c, d} from "./mymodulus.js";
console.log(a,b,c);           ///named import
          


// import object from "./mymodulus.js";
// console.log(object);   //default import with any named

// let a=require("./mymodulus2.js")
// console.log(a);
