import '../CSS/Background.css'
import Note from './Note'
import NoteCreator from './NoteCreator'

function Background(props) {
    return (
        <div>
            <div className='center-screen'>
                <div className='notesCreatorHolder'>
                    <NoteCreator buttonAction={props.buttonAction} />
                </div>
                <hr className='line' />
                <div className='notesBody'>
                    {props.notes.map((note, index) => {
                        return (
                            <Note
                                key={note.key}
                                id={index}
                                noteTitle={note.title}
                                noteContent={note.content}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Background
