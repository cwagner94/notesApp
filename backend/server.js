const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile('/Users/chriswagner/Desktop/JS WD/notesApp/frontend/src/index.js')
})

// app.post('/')

app.listen(6000, function () {
    console.log('Server started on port 6000...')
})

// https://www.linkedin.com/advice/0/how-do-you-securely-store-manage-user#:~:text=Use%20hashing%20and%20salting%20for%20passwords&text=You%20should%20use%20a%20secure,as%20MD5%20or%20SHA%2D1.