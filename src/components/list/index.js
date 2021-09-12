import {useState} from "react";

const List = ({item, delTodo, updateTodo}) =>{
    const [edit, setEdit] = useState(false)
    const [modified, setModified] = useState(item.title)
    const handleSave = () => {
        updateTodo(modified, item.id)
        setEdit(false)
    }
    return(
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {
                    edit ? <input onChange={(e) => setModified(e.target.value)} defaultValue={item.title} type='text'/> : <span>{item.title}</span>
                }
                    <button onClick={() => edit ? handleSave() : setEdit(true)} type='button' className='btn btn-warning me-2 btn-sm'>
                    {
                        edit ? "Save" : "Edit"
                    }
                    </button>
                    <button onClick={() => delTodo(item.id)} type='button' className='btn btn-danger btn-sm'>Delete</button>
            </li>
    )
}
export default List