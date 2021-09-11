// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";
import List from "../list";

const Todo = () =>{
    const [todos, setTodos] = useState([
        {id: 1, title: 'Сходить в магазин', createdAt: + new Date()},
        {id: 2, title: 'Сьесть мороженку', createdAt: + new Date()},
        {id: 3, title: 'Сходить в парк', createdAt: + new Date()}
    ])
    const [newTodo, setNewTodo] = useState('')
    const handleChange = (e) =>{
        setNewTodo(e.target.value)
    }
    const delTodo = (id) =>{
        setTodos(todos.filter(el => el.id !== id))
    }
    const addTodo =() =>{
        const newItem ={
            id: todos.length ? todos[todos.length-1].id+1 : 1,  //проверка на undefined
            title:newTodo,
            createdAt: + new Date()
        }
        setTodos([...todos, newItem])
        setNewTodo('')

    }
    const updateTodo = (modified, id) => {
        setTodos(todos.map(item => item.id === id ? {...item, title: modified} : item    ))
    }
    return(
        <div className='row offset-md-3 my-5'>
            <div className='col-md-4'>
                <div className='d-flex mb-4'>
                    <input onChange={handleChange} value={newTodo} onKeyDown={e => {if(e.key === "Enter") addTodo()}} type="text" className='form-control me-2'/>
                    <button onClick={addTodo} disabled={!newTodo.trim()} type="button" className='btn btn-primary'>Добавить</button>
                </div>
                <ul className="list-group">
                    {
                        todos.map(item =>
                            <List item={item} delTodo={delTodo} updateTodo={updateTodo}/>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
export default Todo;