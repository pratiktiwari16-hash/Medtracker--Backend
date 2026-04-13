const express = require('express');
const app = express();

// Root route (test)
app.get('/', (req, res) => {
  res.send('🚀 MedTracker API Running');
});

// Health check (important)
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// IMPORTANT: Railway dynamic port
const PORT = process.env.PORT || 8080;

// Listen on correct host + port
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server started on port ${PORT}`);
});
