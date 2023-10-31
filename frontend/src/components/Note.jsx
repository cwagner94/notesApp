import React from 'react';
import '../CSS/Note.css';
import NoteTitle from './NoteTitle';
import NoteContent from './NoteContent';

function Note(props) {

    function handleClick() {
        props.deleteNote(props.id)
    }

    return (
        <div className='note-body'>
            <NoteTitle noteTitle={props.noteTitle} />
            <hr />
            <NoteContent noteContent={props.noteContent} />
            <button onClick={handleClick}>DELETE</button>
        </div>
    )
}

export default Note