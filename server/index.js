const express = require('express');
const bodyParser = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./routes');
const path = require('path');

const app = express();

const apiPort = 3000;


// const pusher = require('pusher');
// const pg = require('pg');


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//database connection
mongoose.connect('mongodb://127.0.0.1:27017/Sessions', {
    useNewUrlParser: true });
const connection = mongoose.connection;


app.use('/session', router);
app.use('/user/profile', router);


app.listen(apiPort, function(){
console.log(`server is running on port ${apiPort}`);
});

connection.once('open', function(){
    console.log("MongoDB database connection")
});

app.get('/', (req,res) =>{
    res.send("yes")
});

