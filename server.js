const port = process.env.PORT || 8080;
const express = require('express');

var app = express();
app.use(express.static(__dirname + '/views/'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, ()=> {
    console.log("Server is up and running on port ", port);
});
