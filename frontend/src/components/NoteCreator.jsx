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

    function buttonAction(event) {
        event.preventDefault()
        fetch('http://localhost:5000/add-note', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
            .then((res) => {
                setNote({
                    'title': '',
                    'content': ''
                })
            })
            .catch(err => { console.log(err) })
    }

    return (
        <div className='noteCreator-body'>
            <form onSubmit={buttonAction}>
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
                <AddButton />
            </form>
        </div>
    )
}

export default NoteCreator