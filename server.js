const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('🚀 MedTracker API Running');
});

// Health check (important)
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// In-memory data
let meds = [];

// Get meds
app.get('/meds', (req, res) => {
  res.json(meds);
});

// Add med
app.post('/meds', (req, res) => {
  const newMed = { id: Date.now().toString(), ...req.body };
  meds.push(newMed);
  res.json(newMed);
});

// PORT FIX
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
