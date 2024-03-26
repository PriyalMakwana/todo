import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <div>
      <AddTodo/>
      <Todos/>
    </div>
  )
}
