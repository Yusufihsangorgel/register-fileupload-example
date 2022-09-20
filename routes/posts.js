
const express = require('express');
const router = express.Router();
const post = require('../models/User');


router.post('/register', (req, res) => {

    const newPost = new post({
        username: JSON.parse(req.body).username,
        password: JSON.parse(req.body).password,
        
    });
    console.log(newPost);
    newPost.save().then(post => {
        res.send("kayıt başarılı brom");
    }).catch(err => {
        res.status(404).send(`error ${err}`);
        console.log(err);
    });
});

//update post image with id 
router.post('/image/:id', (req, res) => {
    post.findById(req.params.id).then(post => {
        if (post) {

            post.image = req.files.image.data.toString('base64');
            console.log(`${post.image}`);
            post.save().then(post => {
                res.send("profil foton yüklendi brom");
            }).catch(err => {
                console.log(err);
            });
        } else {
            res.sendStatus(404);
        }
    }).catch(err => {
        console.log(err);
    });
});


module.exports = router;