const mongoose = require('mongoose');
const Schema = mongoose.Schema ;


const listSchema = new Schema({
    name: String ,
    type: String ,
    price: Number ,
    location: String,
    description: String
})

const list = mongoose.model('list' , listSchema)

module.exports = list ;