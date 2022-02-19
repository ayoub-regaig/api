const mongoose = require("mongoose")

const configDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/ayoub');
        console.log("DB connected")
    } catch (error) {
        console.error(error)
        
    }
}
module.exports = configDB