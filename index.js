const express = require('express')
const app = express()
const Port =  8080

app.get('/', (req ,res)=>{
    res.send('Hello world')
})


app.listen(Port , ()=>{
    console.log(`Server is Running on PORT : ${Port}`);
})
