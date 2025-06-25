const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.use(cors());
app.use(express.json());

// Sample route
app.get('/api/hello', async (req, res) => {
//   const result = await pool.query('SELECT NOW()');
res.json({ message: 'Hello from backend!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
