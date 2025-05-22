const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoute = require('./routes/contactRoutes');

dotenv.config();

const app = express();

// Secure CORS setup
app.use(cors({
  origin: 'https://frontend-anas-portfolio-website-wnas.onrender.com',
  methods: ['POST'],
  credentials: true
}));

app.use(express.json());

// Mount contact route
app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});