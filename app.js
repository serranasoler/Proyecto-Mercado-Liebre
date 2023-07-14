const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

//app.listen (3000, () =>
//console.log ("Servidor corriendo"));

app.listen (process.env.PORT, () =>{
    console.log("servidor escuchando en puerto" + "http://localhost:3000");});

