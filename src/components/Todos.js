import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

export default function Todos() {
  const todos = useSelector(state => state.todos)

  const dispatch = useDispatch()

 return (
    <div className='justify-content-center align-items-center my-3'>
      <div className='text-center text-danger'><h3>Todos</h3></div>
      {
        todos.map((todo)=>
            (
                <ul key={todo.id} className='text-center mt-5'>
                <li  >
                    {todo.text}
                    <button className='btn btn-danger mx-5' onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
                </li>
                </ul>
            ))
      }
    </div>
  )
}
