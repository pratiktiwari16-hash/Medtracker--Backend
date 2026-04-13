const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('🚀 MedTracker API Running');
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// In-memory DB
let meds = [];

// Get meds
app.get('/meds', (req, res) => {
  res.json(meds);
});

// Add med
app.post('/meds', (req, res) => {
  const newMed = {
    id: Date.now().toString(),
    name: req.body.name,
    dosage: req.body.dosage,
    time: req.body.time || "09:00",
    user: req.body.user || "Self",
    taken: false
  };

  meds.push(newMed);
  res.json(newMed);
});

// Update med
app.put('/meds/:id', (req, res) => {
  meds = meds.map(m =>
    m.id === req.params.id ? { ...m, ...req.body } : m
  );
  res.send("Updated");
});

// Delete med
app.delete('/meds/:id', (req, res) => {
  meds = meds.filter(m => m.id !== req.params.id);
  res.send("Deleted");
});

// IMPORTANT PORT FIX
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running on ${PORT}`);
});
