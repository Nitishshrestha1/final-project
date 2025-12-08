const express = require('express');
const dotenv = require('dotenv').config();
const filecontroll = require('./routes/filesRouter');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const multer = require('multer');
const app = express();

const storage = multer.diskStorage ({
    destination: './uploads',
    filename: (req,res,cb) => {
        return cb(req.body.filename)
    }
})

const upload = multer({storage})

// middleware to connect with mongodb
connectDb();

// required middleware
app.use(express.json())
app.use(express.static('public'));

// user controll routers
app.post('/api/register', (req,res) => {
    res.json({message: 'Register a new user'})
})

app.post('/api/login', (req,res) => {
    res.json({message: 'Log in and receive a token'})
})

// file controll routers
app.use('/api', filecontroll)

// error handeling middleware
app.use(errorHandler)

app.listen(5000, () => {
    console.log('server is open at port 5000')
})

