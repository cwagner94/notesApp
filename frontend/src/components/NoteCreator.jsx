import React, { useState } from 'react';
import '../CSS/NoteCreator.css';
import NoteTitle from './NoteTitle';
import NoteContent from './NoteContent';
import AddButton from './AddButton';

function NoteCreator(props) {

    const [note, setNote] = useState({
        'title': '',
        'content': ''
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((previous) => {
            return {
                ...previous,
                [name]: value
            }
        })

    }

    // function buttonAction(event) {
    //     props.addNote(note)
    //     setNote({
    //         'title': '',
    //         'content': ''
    //     })
    //     event.preventDefault()
    // }

    function buttonAction(event) {
        props.addNote(note)
        fetch('http://127.0.0.1:6000/add-note', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
        setNote({
            'title': '',
            'content': ''
        })
        event.preventDefault()
    }

    // function createNote() {
    //     fetch('http://127.0.0.1:6000/add-note', {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(note)
    //     })
    // }

    return (
        <div className='noteCreator-body'>
            <form>
                <div className='noteCreatorTitle'>
                    <input
                        name='title'
                        value={note.title}
                        placeholder='Title'
                        onChange={handleChange}
                    />
                </div>
                <hr />
                <div className='noteCreatorContent'>
                    <textarea
                        name='content'
                        value={note.content}
                        placeholder='Write something here...'
                        onChange={handleChange}
                    />
                </div>
                <AddButton onClick={buttonAction} />
            </form>
        </div>
    )
}

export default NoteCreator