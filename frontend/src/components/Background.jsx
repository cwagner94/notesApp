import '../CSS/Background.css'
import Note from './Note'
import NoteCreator from './NoteCreator'

function Background(props) {
    return (
        <div className='center-screen'>
            <div className='notesCreatorHolder'>
                <NoteCreator addNote={props.addNote} />
            </div>
            <hr className='line' />
            <div className='notesBody'>
                {props.notes.map((note, index) => {
                    return (
                        <Note
                            key={index}
                            id={index}
                            noteTitle={note.title}
                            noteContent={note.content}
                            deleteNote={props.deleteNote}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Background
