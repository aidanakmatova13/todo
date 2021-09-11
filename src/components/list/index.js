import {useState} from "react";

const List = ({item, delTodo, updateTodo}) =>{
    const [edit, setEdit] = useState(false)
    const [newChange, setNewChange] = useState(item.title)
    const handleSave = () => {
        updateTodo(newChange, item.id)
        setEdit(false)
    }
    return(
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {
                    edit ? <input onChange={(e) => setNewChange(e.target.value)} defaultValue={item.title} type='text'/> : <span>{item.title}</span>
                }
                <div>
                    <button onClick={() => edit ? handleSave() : setEdit(true)} type='button' className='btn btn-warning me-2 btn-sm'>
                    {
                        edit ? <span>Save</span> : <span>Edit</span>
                    }
                    </button>
                    <button onClick={() => delTodo(item.id)} type='button' className='btn btn-danger btn-sm'>Delete</button>
                </div>
            </li>
    )
}
export default List