import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    < >
    <div >
    <h1>Welcome to the App</h1>
    <AddTodo />
    <Todos />
    </div>
    
    </>

  )
}

export default App
