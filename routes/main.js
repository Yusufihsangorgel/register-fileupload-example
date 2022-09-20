const express = require('express');
const router = express.Router();

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
    res.render('site2/blog');
});

router.get('/login', function (req, res) {
    res.render('site2/login');
});




module.exports = router;