/*const http = require('http')
const  fs = require('fs')

const aboutPage = fs.readFileSync('about.html')
const contact = fs.readFileSync('contact.html')
const homePage = fs.readFileSync('index.html')

const server = http.createServer((request,response)=>{


    console.log(request.url);
    if(request.url === '/about'){
        return response.end(aboutPage)
    } else if(request.url === '/contact'){
        return response.end(contact)
    }else if(request.url === '/'){
        return response.end(homePage)
    }else {
        response.writeHead(404)
        response.end('This page was not  found')
    }
  
    
});

server.listen(3000)
*/

const express = require('express')

const app = express()

app.get('/',(req,res)=> {
//res.send('Hello')

res.json({
    name:'Alper',
    surname:'ALANYALI'
})
})

app.listen(3000, ()=>{
    console.log('App is listening to 3000 port');
})