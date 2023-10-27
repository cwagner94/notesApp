import React from 'react';
import '../CSS/NoteTitle.css'

function NoteTitle(props) {
    return (
        <div className='noteTitle'>
            <h3>{props.noteTitle}</h3>
        </div>
    )
}

export default NoteTitle