import '../CSS/NoteCreator.css';
import NoteTitle from './NoteTitle';
import NoteContent from './NoteContent';
import AddButton from './AddButton';

function NoteCreator(props) {
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
                <AddButton buttonAction={props.buttonAction} />
            </form>
        </div>
    )
}

export default NoteCreator