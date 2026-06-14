//Server create karna and 

const express = require('express');
const noteModel = require('./model/notes.model');
const cors = require('cors');
const path = require('path')
const app = express();
//middleware
app.use(express.json());
app.use(cors());
app.use(express.static('./public'))

//POST/api/notes => create a note
app.post('/api/notes', async(req,res)=>{
    const {title, description} = req.body;

    const note = await noteModel.create({
        title,description
    })
    res.status(201).json({
        message: "Note created successfully",
        note
    })
})

//GET/api/notes => get all notes

app.get('/api/notes', async (req,res)=>{
    const notes = await noteModel.find();
    res.status(200).json({
        message:"Notes Fetched successfully",
        notes
    })
})
//GET/api/notes/:id => get a single note by id
//PATCH/api/notes/:id => update a note by id

app.patch('/api/notes/:id', async (req,res)=>{

    const id = req.params.id;
    const {description } = req.body;
    await noteModel.findByIdAndUpdate(id,{description});
    res.status(200).json({
        message:"Notes updeted successfully",
        notes
    })
})
//DELETE/api/notes/:id => delete a note by id
app.delete('/api/notes/:id', async (req,res)=>{
    const id = req.params.id;
    await noteModel.findByIdAndDelete(id);
    res.status(200).json({
        message:"Notes deleted successfully",
        
    })
})
// *---- this is a wild card---yo un api ko handel karta hai jo hamne create nhi kiya hai
app.use('*name', (req ,res)=>{
    //path jo wo apna rasta SRC tak bnata hai ps se folder ya file tak ka 
    res.sendFile(path.join(__dirname,"..","/public/index.html"));

    
})

module.exports = app;