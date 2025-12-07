const express = require('express');
const filecontroll = require('./routes/filesRouter');
const errorHandler = require('./middleware/errorHandler');
const app = express();

app.use(express.json())
app.use(express.static('public'));

// user controll
app.post('/api/register', (req,res) => {
    res.json({message: 'Register a new user'})
})

app.post('/api/login', (req,res) => {
    res.json({message: 'Log in and receive a token'})
})

// file controll
app.use('/api', filecontroll)

app.use(errorHandler)

app.listen(5000, () => {
    console.log('server is open at port 5000')
})

