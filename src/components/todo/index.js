// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from "react";
import List from "../list";
import axios from "axios";

const Todo = () =>{
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')
    const delTodo = (id) =>{
        axios.delete(`https://613d36a694dbd600172ab88f.mockapi.io/api/todos/${id}`)
            .then(() => setTodos(todos.filter(el => el.id !== id)))
    }
    const addTodo =() =>{
        const newItem ={
            title:newTodo,
            createdAt: + new Date()
        }
        axios.post(`https://613d36a694dbd600172ab88f.mockapi.io/api/todos/`, newItem)
            .then(({data}) => {
                setTodos([...todos, data])
                setNewTodo('')
            })
    }
    const updateTodo = (modified, id) => {
        setTodos(todos.map(item => item.id === id ? {...item, title: modified} : item    ))
    }
    useEffect(() =>{
        axios('https://613d36a694dbd600172ab88f.mockapi.io/api/todos')
            .then(({data}) => setTodos(data))
    },[])



    return(
        <div className='row offset-md-3 my-5'>
            <div className='col-md-4'>
                <div className='d-flex mb-4'>
                    <input onChange={(e)=>setNewTodo(e.target.value)} value={newTodo} onKeyDown={e => {if(e.key === "Enter") addTodo()}} type="text" className='form-control me-2'/>
                    <button onClick={addTodo} disabled={!newTodo.trim()} type="button" className='btn btn-primary'>Добавить</button>
                </div>
                <ul className="list-group">
                    {
                        todos.map(item =>
                            <List key={item.id} item={item} delTodo={delTodo} updateTodo={updateTodo}/>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
export default Todo;