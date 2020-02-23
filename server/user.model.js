const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let users = new Schema({
    name:{
        type: String,
        max: 25
    },
    email:{
        type: String,
        max: 50
    },
    password:{
        type:{
            String,
            max: 16
        }
    },
    userID:{
        type: String,
        max: 200
    },
    username:{
        type: String,
        max: 50
    }
});

module.exports = mongoose.model('users', users);