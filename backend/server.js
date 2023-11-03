require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const Note = require('./models/note')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connect to mongoDB
const adminName = process.env.MONGODBUSERNAME
const password = encodeURIComponent(process.env.MONGODBPASSWORD)
const server = process.env.MONGODBSERVER
const database = process.env.MONGODBNAME
const dbURI = `mongodb+srv://${adminName}:${password}@${server}/${database}?retryWrites=true&w=majority`


mongoose.connect(dbURI)
    .then(res => {
        console.log('connected to database...')
        app.listen(6060, function () {
            console.log('Server started on port 6060...')
        })
    })
    .catch(err => console.log(err))


app.get('/add-note', (req, res) => {
    const note = new Note({
        title: 'test note title2',
        content: 'test note content2'
    });

    note.save()
        .then((result) => {
            res.send(result)
        })
        .catch(err => console.log(err))
})


app.get('/all-notes', (req, res) => {
    Note.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => console.log(err))
})


app.get('/single-note', (req, res) => {
    Note.findById('65451681615961b6f971ac52')
        .then((result) => {
            res.send(result)
        })
        .catch(err => console.log(err))
})


app.get('/', (req, res) => {
    res.sendFile('/Users/chriswagner/Desktop/JS WD/notesApp/frontend/src/index.js')
})

// app.post('/')

// app.listen(6000, function () {
//     console.log('Server started on port 6000...')
// })

// https://www.linkedin.com/advice/0/how-do-you-securely-store-manage-user#:~:text=Use%20hashing%20and%20salting%20for%20passwords&text=You%20should%20use%20a%20secure,as%20MD5%20or%20SHA%2D1.
// https://www.youtube.com/watch?v=bxsemcrY4gQ
// https://stackoverflow.com/questions/60498948/securely-use-connection-string-of-mongoatlas-in-node-js-to-connect-to-mongodb
// encrypt and decrypt connection string when using