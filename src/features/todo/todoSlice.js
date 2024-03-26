import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1, text:"Hello World"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{                                  //properties and functions
        addTodo: (state,action) => {            //declaration+defination
           const todo = {
            id: nanoid(),
            text: action.payload
           }
           state.todos.push(todo)
        },          
        removeTodo: (state,action) => {          //state gives the access of initial state and action are functionality(gives values for functinality)
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }      
    }                       
})

export const {addTodo, removeTodo} = todoSlice.actions     //it will uses in our component   

export default todoSlice.reducer