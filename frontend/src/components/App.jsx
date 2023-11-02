import React, { useState } from 'react';
import Background from './Background';

function App() {

    const [notes, setNotes] = useState([])

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


    return (
        <div>
            <Background notes={notes} addNote={addNote} deleteNote={deleteNote} />
        </div>
    )
}

export default App;