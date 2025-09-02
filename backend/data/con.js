const list = require('../modal/list')
const data = require('./data.json')



const main = async() => {
 await list.insertMany(data)
}

main();