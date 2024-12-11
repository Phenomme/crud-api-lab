const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Zfighter = require('./models/zfighter.js');
const cors = require('cors');
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

app.post('/zfighters', async (req, res) => {
    const createdZfighter = await Zfighter.create(req.body);
    res.json(createdZfighter)
  });

  app.get('/zfighters', async (req, res) => {
	const foundZfighters = await Zfighter.find();
    res.json(foundZfighters);
});

app.delete('/zfighters/:zfighterId', async (req, res) => {
	const deletedZfighter = await Zfighter.findByIdAndDelete(req.params.zfighterId);
    res.json(deletedZfighter);
});

app.put('/zfighters/:zfighterId', async (req, res) => {
    const updatedZfighter = await Zfighter.findByIdAndUpdate(
	    req.params.zfighterId, 
	    req.body,
	    {new: true}
    );
    console.log(req.params.zfighterId)
    console.log(req.body);
    res.json(updatedZfighter)

});

app.listen(3000, () => {
  console.log('The express app is ready!');
});