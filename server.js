const express = require('express');
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
app.post('/api/upload', (req,res) => {
    res.json({message: 'Upload a file (auth required)'})
})

app.get('/api/public-file', (req,res) => {
    res.json({message: 'Retieve all public files'})
})

app.get('/api/my-files', (req,res) => {
    res.json({message: "Retrive logged-in user's files"})
})

app.get('/api/files/:id/download', (req,res) => {
    res.json({message: "Download file (permission check)"})
})

app.delete('/api/files/:id', (req,res) => {
    res.json({message: 'Delete file (owner only)'})
})

app.listen(5000, () => {
    console.log('server is open at port 5000')
})

