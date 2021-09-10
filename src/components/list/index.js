import {useState} from "react";

const List = ({item, delTodo}) =>{
    const [edit, setEdit] = useState(false)
    const [changeInput, setChangeInput] = useState('')
    const change = (e) =>{
        setChangeInput(e.target.value)
    }
    return(
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {
                    edit ? <input onChange={change} defaultValue={item.title} type='text'/> : <span>{item.title}</span>
                }
                <div>
                    {
                        edit ? <button onClick={() => setEdit(!edit)} type='button' className='btn btn-warning me-5 btn-sm'>Save</button>
                            : <button onClick={() => setEdit(true)} type='button' className='btn btn-warning me-2 btn-sm'>Edit</button>
                    }
                    <button onClick={() => delTodo(item.id)} type='button' className='btn btn-danger btn-sm'>Delete</button>
                </div>
            </li>
    )
}
export default List