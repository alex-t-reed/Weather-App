const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(6969, () => {
    console.log(`Now running on http://127.0.0.1:6969`);
});