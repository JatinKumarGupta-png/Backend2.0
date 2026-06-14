//server ko create karna 
//server ko config karna


const express = require('express');

const app = express();

app.get('/', (req,res) =>{
    res.send('server is created');
})

module.exports = app;