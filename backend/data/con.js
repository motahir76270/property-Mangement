const mongoose  = require('mongoose')
const list = require('../modal/list')
const data = require('./data.json')
const list = require('../modal/list')



async function main() {
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/ass1' )
        console.log('data base connected Connected!')
        await list.insertMany(data);

    } catch (error) {
        throw new Error("data base not connect") 
    }
  
}

main()