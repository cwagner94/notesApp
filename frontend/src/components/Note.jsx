import React from 'react';
import '../CSS/Note.css';
import NoteTitle from './NoteTitle';
import NoteContent from './NoteContent';

function Note(props) {
    return (
        <div className='note-body'>
            <NoteTitle noteTitle={props.noteTitle} />
            <hr />
            <NoteContent noteContent={props.noteContent} />
        </div>
    )
}

export default Note