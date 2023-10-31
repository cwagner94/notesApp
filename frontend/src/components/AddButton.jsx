import '../CSS/AddButton.css'

function AddButton(props) {
    return (
        <button type='button' className='addButton' onClick={props.onClick}>+</button>
    )
}

export default AddButton