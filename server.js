const express = require('express')
const app = express()
const path = require('path');

const port = process.env.PORT || 8080;

app.use(express.static('./'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



app.listen(port, () => console.log(`The server is runnig on : ${port}`));