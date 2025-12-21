const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const { errorHandler } = require('./middleware/error');

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/evidence', require('./routes/evidenceRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

module.exports = app;
