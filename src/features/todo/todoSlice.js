import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id:1,
        text:"Hello World",
    }],
}

export const todoSlice = createSlice({
    name: "hut",
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            const shruti = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(shruti);
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
    }

})

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;