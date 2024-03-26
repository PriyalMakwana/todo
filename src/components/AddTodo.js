import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo} from '../features/todo/todoSlice'

export default function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()       //dispatch changes in stores with the help of reducers 

  const addTodoHandler = (e) => {
    e.preventDefault()    
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <>
      <h1 className='text-center'>My Todo</h1>
    <form onSubmit={addTodoHandler} className='d-flex align-items-center justify-content-center mt-4'>
       <input type='text' placeholder='Enter a todo...' value={input} onChange={(e)=> setInput(e.target.value)} className='w-50 m-2'/>
       <button className='btn btn-primary'>Add Todo</button>
    </form>
    </>
  )
}
