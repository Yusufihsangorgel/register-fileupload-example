const express = require('express');
const router = express.Router();
const post = require('../models/post');

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