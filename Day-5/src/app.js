//serve ko criate ksrna
//server ko config karna

const express = require("express");

const app = express();
//middleware--esase hum request ke body ko read kr skte hai
app.use(express.json());

//notes array pahle empty hota hai--or data store--esase hum data ko store kr skte hai
//ram ke under data store karte hai
const notes =[];
//postrequest

app.post("/notes",(req,res)=>{
    console.log(req.body);
    notes.push(req.body);

    //201--es code ko tab use karte hai jab hame client se new request karta hai tab hum status code 201 ka use karte hai
    res.status(201).json({
        message:"note created successfully",
    })
})

//get request---ese hum data ko client ko bhejte hai


app.get("/notes" ,(req,res)=>{
    res.status(200).json({
        message:"notes retrieved successfully",
        data:notes,
    })


})


//delete request--ese hum data ko delete krte hai
app.delete("/notes/:idx",(req,res)=>{
    delete notes[req.params.idx];
    //204--es code ko tab use karte hai jab hame client se data delete krna hota hai tab hum status code 204 ka use karte hai  and postman per data nhhi dikhega but delete ho jayega

    res.status(204).json({
        message:"note deleted successfully",
    })
})

app.patch("/notes/:idx",(req,res)=>{
    notes[req.params.idx].description = req.body.description;
    res.status(200).json({
        message:"note updated successfully",

    })
})




module.exports = app;