const express=require('express');
const app=express();
port=3000;
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/about',(req,res)=>{
    res.send('hii')
})
app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`)
})