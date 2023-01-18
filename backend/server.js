const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleWare');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// using express json for body-parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// using routes
app.use('/api/goals', require('./routes/goalRoutes'));

// using middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
});