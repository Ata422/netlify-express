const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://capobrain:capo2345@cluster0.hju6mvr.mongodb.net/?retryWrites=true&w=majority'

 const connectToMongo = async ()=>{
    try {
        mongoose.connect(mongoURI)
        console.log('Successfuly connected with mongodb')
    } catch (error) {
        console.log(error)
        process.exit()
    }
 }

 module.exports = connectToMongo