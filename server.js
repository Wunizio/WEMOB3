const express = require('express');
const app = express();
const axios = require("axios");
const BASE_URL = 'ParasiteBreachAPI.btshub.lu';

app.set('view engine', 'pug');



app.get('/', async (req, res) =>{
    res.render('index');
})

app.get('/about', (req, res) =>{
    res.render('about');
})

app.get('/allUser', async (req, res) =>{
    const query = await axios.get("http://parasitebreachapi.btshub.lu/player").catch(error =>{
        
    });
    res.render('allUser', {users: query });
})

const server = app.listen(7200, () =>{
    console.log(`Express running PORT ${server.address().port}`)
} );