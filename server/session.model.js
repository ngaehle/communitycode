const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let sessions = new Schema({
    id:{
        type: String,
        lable: "session ID",
        max: 200
    },
    createdOn:{
        type: Date
    }, 
    createdBy:{
        userID: {
            type: String,
            lable: "userID"
        }
    }, 
    type:{
        type: String,
        lable: "Language"
    },
    isPrivate:{
        type: Boolean
    }
});



module.exports = mongoose.model("sessions", sessions);
