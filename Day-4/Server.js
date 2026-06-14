// server ko start karna
//node server.js ---- ye command se server start hoga but jab bhi code me changes karoge to server ko manually restart karna padega
// npx nodmone server.js --- ye command se server start hoga aur jab bhi code me changes karoge to server automatically restart ho jayega

const app = require("./src/app");


app.listen(5000, () =>{
    console.log("server is running on port 5000")
})