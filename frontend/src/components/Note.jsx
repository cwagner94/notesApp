import '../CSS/Note.css';
import NoteTitle from './NoteTitle';
import NoteContent from './NoteContent';

function Note() {
    return (
        <div className='note-body'>
            <NoteTitle />
            <NoteContent />
        </div>
    )
}

export default Note