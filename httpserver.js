const {Console}=require('console');
const http=require('http');
const port =process.env.PORT||3000;
const server=http.createServer((req,res)=>{
    // console.log(req.url); // if u write on the url after locaklhost:3000/Nikhilisgreat it will be shown below and in the network in the browser
    res.statusCode=200;
    if(req.url=="/"){
        res.statusCode=200;
        res.end('<h1>I m amazing</h1><p>aaaaaaaaa</P')
    }else if(req.url=="/about"){
        res.statusCode=200;
        res.end('<h1>yes yes</h1>')
    }else{
        res.statusCode=404;
        res.end('<h1>NOT</h1>')
    }
    res.setHeader("Content-type","text/html");
    res.end("<h1>Hii i'm nikhil</h1>");
})
server.listen(port,()=>{
console.log(`Listening on port ${port}`)
})