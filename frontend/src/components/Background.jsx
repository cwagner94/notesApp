import React, { useState, useEffect } from 'react'
import '../CSS/Background.css'
import Note from './Note'
import NoteCreator from './NoteCreator'

function Background(props) {

    const [notes, setNotes] = useState([])


    function getNotes() {
        fetch('http://localhost:5000/all-notes')
            .then(res => res.json())
            .then(res => setNotes(res))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getNotes()
    })

    return (
        <div className='center-screen'>
            <div className='notesCreatorHolder'>
                <NoteCreator />
            </div>
            <hr className='line' />
            <div className='notesBody'>
                {notes.map((note, index) => {
                    return (
                        <Note
                            key={index}
                            id={note._id}
                            noteTitle={note.title}
                            noteContent={note.content}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Background

// justify-content: space-between space-around space-evenly