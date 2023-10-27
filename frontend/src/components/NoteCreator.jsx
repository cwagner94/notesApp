import '../CSS/NoteCreator.css';
import NoteTitle from './NoteTitle';
import NoteContent from './NoteContent';

function NoteCreator() {
    return (
        <div className='noteCreator-body'>
            <form>
                <div className='noteCreatorTitle'>
                    <input
                        name='title'
                        placeholder='Title'
                    />
                </div>
                <hr />
                <div className='noteCreatorContent'>
                    <textarea
                        name='content'
                        placeholder='Write something here...'
                    />
                </div>
            </form>
        </div>
    )
}

export default NoteCreator