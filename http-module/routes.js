const http = require('http');

const server = http.createServer((req,res)=> {
    const url = req.url;
    if(url==='/'){
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home");
    } else if (url === '/projects'){
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("project");
    }else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("this page is not found");
    }

});

const port =3000;
server.listen(port,()=>{

    console.log(`Server ins now linsning to port ${port}`);
})