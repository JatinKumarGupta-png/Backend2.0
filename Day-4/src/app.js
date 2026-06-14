// eske do kaam hote hai// 1. server create karna
// 2. request handle karna ya server ko configure karna

const express = require("express")

const app = express();
app.use(express.json());

const notes =[
    // {
    //     id:1,
    //     text:"this is my first note",
    // }
]

app.get("/", (req,res)=>{
    res.send("hello world");
})
app.post("/notes",(req,res)=>{
    console.log(req.body);
    res.send("note added successfully");
    notes.push(req.body);
    console.log(notes);
})

app.get("/notes",(req,res)=>{
    res.send(notes);
})
//use karne wale hai params ko yani ki id ko use karne wale hai
app.delete("/notes/:id", (req,res)=>{
    console.log(req.params.id);
    delete notes[req.params.id];
    res.send("note deleted successfully");
});

app.patch("/notes/:id",(req,res)=>{
    notes[req.params.id].description = req.body.description;
    res.send("note updated successfully");

})
module.exports = app;
