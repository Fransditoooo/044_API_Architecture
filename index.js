require('dotenv').config();
const express = require('express');
const connectDatabase = require('./config/db');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rute Utama (Agar saat buka http://localhost:3000 langsung muncul dan TIDAK Cannot GET)
app.get('/', (req, res) => {
  res.send('API Server is running...');
});

// Rute API (/api)
app.use('/api', routes);

async function startServer() {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();