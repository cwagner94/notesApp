import React, { useState, useEffect } from 'react';
import Background from './Background';

function App() {

    const [notes, setNotes] = useState([])


    async function getNotes() {
        fetch('http://localhost:5000/all-notes')
            .then(res => res.json())
            .then(res => setNotes(res))
            .catch(err => console.log(err))
    }


    function addNote(newNote) {
        setNotes(previousNotes => {
            return ([...previousNotes, newNote])
        })
    }

    function deleteNote(id) {
        setNotes(previousNotes => {
            return (previousNotes.filter((note, index) => index != id))
        })
    }

    // function editNote(id) {
    //     setNotes(previousNotes => {
    //         return ([...previousNotes,])
    //     })
    // }

    useEffect(() => {
        getNotes()
    })

    return (
        <div>
            <Background notes={notes} addNote={addNote} deleteNote={deleteNote} />
        </div>
    )
}

export default App;