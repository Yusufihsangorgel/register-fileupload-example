const express = require('express');
const router = express.Router();
const post = require('../models/post');
const mongoose = require('mongoose');

//post request with  post model

//post request with  {
  //  "title" : "anan",
 //   "content" : "baban"
//} model

router.post('/test', (req, res) => {
    
    const newPost = new post({
        title: req.body.title,
        content: req.body.content
        
    });
    console.log(newPost)
    newPost.save().then(post => {
        res.json(post);
    }).catch(err => {
        console.log(err);
    });
});


// router.post('/test', async (req, res) => {
//     post.create(req.body, (error, post) => {
//        console.log(req.body);
//        if (error) {
//            console.log(error);
//        }
//     }
//     );
// });





//post request
// router.post('/test', async (req, res) => {
//     const post = new post({
//         title: req.body.title,
//         content: req.body.content
//     });
//     try {
//         const newPost = await post.save();
//         res.redirect('/posts');
//     } catch (err) {
//         res.render('posts/new', {
//             post: post,
//             errorMessage: 'Error creating post'
//         });

//     }
// });



module.exports = router;