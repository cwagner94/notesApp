require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const Note = require('./models/note')
const cors = require('cors')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

// connect to mongoDB
const adminName = process.env.MONGODBUSERNAME
const password = encodeURIComponent(process.env.MONGODBPASSWORD)
const server = process.env.MONGODBSERVER
const database = process.env.MONGODBNAME
const dbURI = `mongodb+srv://${adminName}:${password}@${server}/${database}?retryWrites=true&w=majority`


mongoose.connect(dbURI)
    .then(res => {
        console.log('connected to database...')
        app.listen(5000, function () {
            console.log('Server started on port 5000...')
        })
    })
    .catch(err => console.log(err))


app.post('/add-note', (req, res) => {
    var noteTitle = req.body.title
    var noteContent = req.body.content

    const note = new Note({
        title: noteTitle,
        content: noteContent
    });

    note.save()
        .then((result) => {
            res.send(result)
        })
        .catch(err => console.log(err))
})


app.post('/delete-note/:id', (req, res) => {
    var id = req.params.id
    Note.findByIdAndDelete(id)
        .then(res => console.log('Note successfully deleted'))
        .catch(err => console.log(err))
})


app.get('/all-notes', (req, res) => {
    Note.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => console.log(err))
})


app.get('/', (req, res) => {
    res.sendFile('/Users/chriswagner/Desktop/JS WD/notesApp/frontend/src/index.js')
})

// https://www.linkedin.com/advice/0/how-do-you-securely-store-manage-user#:~:text=Use%20hashing%20and%20salting%20for%20passwords&text=You%20should%20use%20a%20secure,as%20MD5%20or%20SHA%2D1.
// https://www.youtube.com/watch?v=bxsemcrY4gQ
// https://www.youtube.com/watch?v=VVGgacjzc2Y