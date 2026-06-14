const mongoose = require('mongoose');
function connectToDb(){
    mongoose.connect('mongodb://Jatin:jatin234@ac-owgstps-shard-00-00.a8pizol.mongodb.net:27017,ac-owgstps-shard-00-01.a8pizol.mongodb.net:27017,ac-owgstps-shard-00-02.a8pizol.mongodb.net:27017/?ssl=true&replicaSet=atlas-o5iwbv-shard-0&authSource=admin&appName=Cluster0')

    .then(()=>{
        console.log('Connected to database'); //mZx5mwNy3CXJo7ZB
    })
    .catch((err)=>{
        console.log('Error connecting to database',err);
    })
}


module.exports = connectToDb