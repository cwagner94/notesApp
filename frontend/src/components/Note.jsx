import React from 'react';
import '../CSS/Note.css';
import NoteTitle from './NoteTitle';
import NoteContent from './NoteContent';

function Note(props) {

    function deleteNote() {
        fetch(`http://localhost:5000/delete-note/${props.id}`, {
            method: 'POST',
        })
            .then((res) => {
            })
            .catch(err => { console.log(err) })
    }

    function handleEditClick() {
        props.editNote()
    }

    return (
        <div className='note-body'>
            <NoteTitle noteTitle={props.noteTitle} />
            <hr />
            <NoteContent noteContent={props.noteContent} />
            <button onClick={deleteNote}>DELETE</button>
        </div>
    )
}

export default Note