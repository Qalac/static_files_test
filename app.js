const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views')); // setting the directory Views as project view folder
app.set('view engine', 'hbs'); // setting views engine as handlebars
app.use(express.static('public/HomePage'));


app.get('/', (req, res) => {
    res.render('index.hbs');
});












app.listen(8000, function() {
    console.log('listening on port 8000');
});

