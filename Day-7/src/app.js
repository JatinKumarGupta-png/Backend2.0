//server ko create karna 
//serverko config karna

const express = require('express');
const noteModel = require('./models/notes.model');
const app = express();
app.use(express.json()); //middleware to parse json data

//POST /notes
//req.body => {title:'',discription:''}
app.post('/notes', async (req,res)=>{
    const {title,discription} = req.body;

    const note  = await noteModel.create({
        title,discription
    })
    res.status(201).json({
        message:'Note created successfully',
        note
    })
})

module.exports = app;
