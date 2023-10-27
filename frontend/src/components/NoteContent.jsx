import React from 'react';
import '../CSS/NoteContent.css'

function NoteContent(props) {
    return (
        <div className='noteContent'>
            <p>{props.noteContent}</p>
        </div>
    )
}

export default NoteContent