const mongoose = require('mongoose');

const post = require('./models/Post');

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

post.findByIdAndUpdate('63292d71537b8eac87284a88', {
    title: 'Node.js ile Blog Yazılımı'
}, (error, post) => {
    console.log(error, post);
})

// post.find({
//     title: "al kanka"
// }, (err, posts) => {
//     console.log(err,posts)
// })


// post.create({
//     title: 'al kanka',
//     content: 'Test Content'
// }, (error, post) => {
//     console.log(error, post)
// })