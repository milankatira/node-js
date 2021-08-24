//import http
const http=require('http');

//creating a server 
const server=http.createServer((req,res)=>{
   // console.log(req.url);

   //url routing 
   if (req.url=='/')
   {res.end("hello");}

   else if (req.url=='/about'){res.end('about page')}
   

   else if (req.url=='/contact'){res.end('contact page')}

   else {res.writeHead(404)
        res.end('404 eror page not exist')}

   });


//server listning 
server.listen(8000,"127.0.0.1",()=>
{
    console.log('listning')
});

//routing 

