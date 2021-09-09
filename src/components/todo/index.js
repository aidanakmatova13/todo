import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";

const Todo = () =>{
    const [todos, setTodos] = useState([
        {id: 1, title: 'Сходить в магазин', createdAt: + new Date()},
        {id: 2, title: 'Сьесть мороженку', createdAt: + new Date()},
        {id: 3, title: 'Сходить в парк', createdAt: + new Date()}
    ])
    const [newTodo, setNewTodo] = useState('')
    const [edit, setEdit] = useState(false)
    const handleChange = (e) =>{
        setNewTodo(e.target.value)
    }
    const addTodo =() =>{
        const newItem ={
            id: todos.length ? todos[todos.length-1].id+1 : 1,  //проверка на undefined
            title:newTodo,
            createdAt: + new Date()
        }
        setTodos([...todos, newItem])
    }
    const delTodo = (id) =>{
        setTodos(todos.filter(el => el.id !== id))
    }
    return(
        <div className='row offset-md-3 my-5'>
            <div className='col-md-4'>
                <div className='d-flex mb-4'>
                    <input onChange={handleChange} type="text" className='form-control me-2'/>
                    <button onClick={addTodo} disabled={!newTodo.trim()} type="button" className='btn btn-primary'>Добавить</button>
                </div>
                <ul className="list-group">
                    {
                        todos.map(item =>
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {
                                    edit ? <input defaultValue={item.title} type='text'/> : <span>{item.title}</span>
                                }
                                <div>
                                    {
                                        edit ? <button onClick={() => setEdit(!edit)} type='button' className='btn btn-warning me-2 btn-sm'>Save</button> : <button onClick={() => setEdit(true)} type='button' className='btn btn-warning me-2 btn-sm'>Edit</button>
                                    }
                                    <button onClick={() => delTodo(item.id)} type='button' className='btn btn-danger btn-sm'>Delete</button>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
export default Todo;