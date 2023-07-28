const express = require('express');
const app = express();
const PORT = 4000;
const HOSTNAME = 'localhost';

app.get('/',(req,res)=>{
res.json({msg : 'I`m homepage'})
})
app.get('/about',(req,res)=>{
    res.json({msg : 'I`m about page!'})
    })
    app.get('/contact',(req,res)=>{
        res.json({email : 'bishalsaud15@gmail.com'})
        })
app.listen(PORT,()=>{
    console.log(`Server is running ${HOSTNAME}:${PORT}`);
})