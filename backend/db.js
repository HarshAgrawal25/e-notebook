const mongoose  = require('mongoose');
const mongoURI  = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false"

const connectToMongo =() =>{
    mongoose.connect( mongoURI, ()=>{
        console.log("connected to mongose successfully");
    })
}

module.exports = connectToMongo;