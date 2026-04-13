const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('YOUR_MONGO_URL');

const Medicine = mongoose.model('Medicine', {
  name: String,
  dosage: String,
  time: String,
  user: String,
  taken: Boolean,
});

app.get('/', (req,res)=>res.send("API Running"));

app.get('/meds', async (req, res) => {
  const meds = await Medicine.find();
  res.json(meds);
});

app.post('/meds', async (req, res) => {
  const med = new Medicine(req.body);
  await med.save();
  res.json(med);
});

app.listen(5000, () => console.log('Server running'));
