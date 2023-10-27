import '../CSS/Background.css'
import Note from './Note'
import NoteCreator from './NoteCreator'

function Background() {
    return (
        <div>
            <div className='center-screen'>
                <div className='notesCreatorHolder'>
                    <NoteCreator />
                </div>
                <hr className='line' />
                <div className='notesBody'>
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                </div>
            </div>
        </div>
    )
}

export default Background
