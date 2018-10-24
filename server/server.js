require('./config/config');
const express = require('express');
const mongoose = require('mongoose');


const app = express();

const bodyParser = require('body-parser');


//BodyParser
app.use(bodyParser.urlencoded( {extended: false}))

app.use(bodyParser.json())


app.get('/usuario', (req, res)=>{

    res.json('Get usuario');
});


app.post('/usuario', (req, res, next)=>{
    let body = req.body
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
});



// Escuchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log('Express corriendo', process.env.PORT);  
})