//server ko run karna and database ko srver se connect ksrna

// const dns = require('node:dns');
// dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = require('./src/app');
// const mongoose = require('./src/config/database');

const connectToDb = require('./src/config/database');

connectToDb();

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})