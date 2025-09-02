const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3000
const list = require('./modal/list') 
var cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
const db=process.env.MongoDbUrl;

async function main() {
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/ass1' )
        console.log('data base connected Connected!')

    } catch (error) {
        throw new Error("data base not connect") 
    }
  
}

main()

app.use( cors({
  origin:"http://localhost:5173"
}))

app.use(express.json());

app.get('/', async(req, res) =>{
    try {
        
        
        const properties = await list.find();
        res.json(properties)
    } catch (error) {
        res.send("somthing went wrong")
    }
} )

app.post('/api/properties', async(req, res) => {
       const {name,type,price,location,description } = req.body ;
       const newList = await list.create({
        name,
        type,
        price,
        location,
        description
       }) 

    res.json(newList)
    
})

app.put('/api/properties/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, price, location, description } = req.body;

    // Optional: Check if the property exists before updating
    const existingProperty = await list.findById(id);
    if (!existingProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }

    // Update the property
    const updatedProperty = await list.findByIdAndUpdate(
      id,
      { name, type, price, location, description },
      { new: true, runValidators: true } // `new: true` returns the updated document
    );

    res.status(200).json(updatedProperty);
  } catch (error) {
    console.error('Error updating property:', error);
    res.status(500).json({ error: 'Server error. Could not update property.' });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))