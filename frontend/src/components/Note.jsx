import '../CSS/Note.css';
import NoteTitle from './NoteTitle';
import NoteContent from './NoteContent';

function Note() {
    return (
        <div className='note-body'>
            <NoteTitle />
            <hr />
            <NoteContent />
            {/* <form>
                <div className='noteTitle'>
                    <input
                        name='title'
                        placeholder='Title'
                    />
                </div>
                <hr />
                <div className='noteContent'>
                    <textarea
                        name='content'
                        placeholder='Write something here...'
                    />
                </div>
            </form> */}
        </div>
    )
}

export default Note