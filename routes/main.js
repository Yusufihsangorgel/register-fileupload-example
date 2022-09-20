const express = require('express');
const router = express.Router();
const post = require('../models/User');

// Index Route
router.get('/', function (req, res) {
    res.render('site2/index');
});

router.get('/about', function (req, res) {
    res.render('site2/about');
});

router.get('/contact', function (req, res) {
    res.render('site2/contact');
});

// get request with id parameter
router.get('/image/:id', (req, res) => {
    post.findById(req.params.id).then(post => {
        if (post) {
            res.json(post);
        } else {
            res.sendStatus(404);
        }
    }).catch(err => {
        console.log(err);
    });
});


// router.get('/:id', function (req, res) {
//     post.findById(req.params.id).then(post => {
//        res.json(` success ${post}`);
//     }
//     ).catch(err => {
//         res.status(404).send(`error ${err}`);
//         console.log(err);
//     }

//     );
// });


router.get('/blog', function (req, res) {
    post.find({}).then(posts => {
        console.log(posts);
        res.send(posts);
    }
    );
});

router.get('/login', function (req, res) {
    res.render('site2/login');
});




module.exports = router;