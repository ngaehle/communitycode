const express = require('express');
const router = express.Router();

const sessionsRoute = express.Router();
const userProfileRoute = express.Router();


let Session = require('./session.model');
let User = require('./user.model');

userProfileRoute.route('/userSearch').get(function(req, res){
    User.find(function(err, users){
        if(err){
            console.log(err);
        }
        else{
            res.json(users);
        }
    })
});
sessionsRoute.route('/session:id').get(function(req, res){
    let id = req.params.id;
    Session.findById(function(err, session){
        res.json(session)
    })

});



// router.get('/', function(req, res){
//     res.render('index')
// });




module.exports =router;