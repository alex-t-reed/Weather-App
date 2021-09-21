const express = require('express');

const app = express();

let PORT = process.env.port || 8080;

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(PORT, () => {
    console.log(`Now running..`);
});