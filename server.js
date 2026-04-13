const express = require('express');
const app = express();

// simple test route
app.get('/', (req, res) => {
  res.send('🚀 MedTracker API Running');
});

// IMPORTANT: port for Railway
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});
