 

 //server ko start karna
 //Database se connect karna

 const app = require('./src/app.js');

const mongoose =  require('mongoose');

function connectToDatabase(){
    mongoose.connect("mongodb+srv://jatinbansagar117_db_user:xi5tcnfOD73Lo0lQ@cluster0.bqzecx3.mongodb.net/Day-5")
    .then(()=>{
        console.log('database is connected');
    })
    .catch((err)=>{
        // console.log(err);
        console.log("database is a connected");
        
    });
}
connectToDatabase();

 app.listen(5000, ()=>{
        console.log('server is running on port 5000');
 })
 