const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('connect to Database')
    })
    .catch((err)=>{
        console.log('not connected to database',err);
    })
}

module.exports = connectToDb;