const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile('/Users/chriswagner/Desktop/JS WD/notesApp/frontend/src/index.js')
})

app.listen(6000, function () {
    console.log('Server started on port 6000...')
})