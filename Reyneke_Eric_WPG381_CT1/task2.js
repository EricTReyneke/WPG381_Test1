const http = require("http");
const fs = require('fs').promises;
const host = "localhost";
const port = 8888;

const requestListener = function (req, res){
    let requestedURL = req.url;
    switch (requestedURL){
     case "/":
        fs.readFile(__dirname + "/home.html")
        .then(contents => {
           res.setHeader("Content-Type", "text/html");
           res.writeHead(200);
           res.end(contents);
         });
         break;

     case "/contact": 
        fs.readFile(__dirname + "/contact.html")
    .then(contents1 => {
        res.setHeader("Content-Type", "text/html");
        res.end(contents1);
     });
     break;
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
