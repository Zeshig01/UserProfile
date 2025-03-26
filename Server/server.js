const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes'); 
const registerRoute=require('./routes/registerRoute')
require('dotenv').config();
const app = express();
const port = 8000;
console.log(port)

app.use(express.json());
// app.use(cors({ origin: 'http://localhost:5173' })); 
app.use(cors({ origin: '*' })); // Allow all origins

app.use('/', userRoutes);
app.use('/register', registerRoute);

connectDB()

app.listen(port, () => {
    console.log(`Your backend is working on http://localhost:${port}`);
});
