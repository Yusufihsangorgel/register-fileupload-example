const express = require('express');
const exphbs = require('express-handlebars');
// const { engine }  = require('express-handlebars');
const app = express();
const port = 3000;
const hostname = "127.0.0.1"
//Handelbars Middleware
//app.engine('handlebars', engine());
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
const mongoose = require('mongoose');

 mongoose.connect('mongodb://127.0.0.1/nodeblog_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const main = require('./routes/main');
const posts = require('./routes/posts');

app.use('/', main);
app.use('/posts', posts);






app.listen(port, hostname, () => {
    console.log(`Server çalışıyor , http://${hostname}:${port}`)
})



//app.use(express.static(path.join(__dirname, 'public')))







// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "index.html"))
// })
// app.get("/about", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "about.html"))
// })
// app.get("/contact", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "contact.html"))
// })







