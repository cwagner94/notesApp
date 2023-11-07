import '../CSS/AddButton.css'

function AddButton() {
    return (
        // <button type='button' className='addButton' onClick={props.onClick}>+</button>
        <input type='submit' className='addButton' value='+' />
    )
}

export default AddButton