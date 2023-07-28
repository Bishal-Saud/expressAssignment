const express = require('express');
const app = express();
const PORT = 3001;
const HOSTNAME ='localhost';

app.get('/',(req,res)=>{
    res.send('Welcome')
})
app.get('/random',(req,res)=>{
    const randomNum =Math.floor(Math.random()*100);
    res.json({random : `${randomNum}`})
})

app.listen(PORT,()=>{
    console.log(`Server is running ${HOSTNAME}:${PORT}`);

})
