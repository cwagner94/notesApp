import React from 'react';
import '../CSS/Note.css';
import NoteTitle from './NoteTitle';
import NoteContent from './NoteContent';

function Note(props) {

    function handleDeleteClick() {
        props.deleteNote(props.id)
    }

    function handleEditClick() {
        props.editNote()
    }

    return (
        <div className='note-body'>
            <NoteTitle noteTitle={props.noteTitle} />
            <hr />
            <NoteContent noteContent={props.noteContent} />
            <button onClick={handleDeleteClick}>DELETE</button>
            {/* <button onclick={handleEditClick}>EDIT</button> */}
        </div>
    )
}

export default Note