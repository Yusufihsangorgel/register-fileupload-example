const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const hostname = "127.0.0.1"
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser')
 mongoose.connect('mongodb://127.0.0.1/yusuflearningdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//app.use(express.urlencoded({extended: false}));

 app.use(bodyParser.raw({inflate:true, limit: '100kb', type: 'application/json'}) );



// app.use(express.json());
app.use(fileUpload());
const main = require('./routes/main');
const posts = require('./routes/posts');

app.use('/', main);
app.use('/posts', posts);






app.listen(port, hostname, () => {
    console.log(`Server çalışıyor , http://${hostname}:${port}`)
})

