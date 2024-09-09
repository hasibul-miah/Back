

import { error } from "console";
import {createRequire} from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");


const http = require('http');
const PORT = 3000;
const HOSTNAME = '127.0.0.1';



const server = http.createServer((req,res)=>{
   if(req.url==="/"){
    fs.readFile("./views/index.html",(error,data)=>{
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    })
    ///Https eiti amader index.js & server.js file ke run kore//
    //r Back end er server jokhon run kore tokhon eti kaj korbe
   }
   else if(req.url==="/about"){
    fs.readFile("./views/about.html",(error,data)=>{
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    })
   }
   else if(req.url==="/contact"){
    fs.readFile("./views/contact.html",(error,data)=>{
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    })
   }
   else{
    fs.readFile("./views/error.html",(error,data)=>{
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    })
   }
})

server.listen(PORT,HOSTNAME,()=>{
    console.log(`Server is open at http://${HOSTNAME}:${PORT}`)
})
// const server = http.createServer((req,res)=>{
    
//     if(req.url ==='/'){
//         fs.readFile("index.html",(error,data)=>{
//             res.writeHead(200,{"Content-Type":"text/html"});
//             res.write(data);
//              res.end("Type is Ok");
//         })
//     }
    

// })//server ei address e run hosse....

// server.listen(PORT,HOSTNAME,(html)=>{
//     console.log(`Server is a open from Here at http://${HOSTNAME}:${PORT}`)
// })