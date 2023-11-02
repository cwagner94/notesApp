const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connect to mongoDB
const adminName = process.env.MONGODBUSERNAME
const password = process.env.MONGODBPASSWORD
const dbURI = `mongodb+srv://${adminName}:${password}@cluster0.epj1x.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
    res.sendFile('/Users/chriswagner/Desktop/JS WD/notesApp/frontend/src/index.js')
})

// app.post('/')

app.listen(6000, function () {
    console.log('Server started on port 6000...')
})

// https://www.linkedin.com/advice/0/how-do-you-securely-store-manage-user#:~:text=Use%20hashing%20and%20salting%20for%20passwords&text=You%20should%20use%20a%20secure,as%20MD5%20or%20SHA%2D1.
// https://www.youtube.com/watch?v=bxsemcrY4gQ
// https://stackoverflow.com/questions/60498948/securely-use-connection-string-of-mongoatlas-in-node-js-to-connect-to-mongodb
// encrypt and decrypt connection string when using


// TODO
// backend node_modules need to be included in .gitignore