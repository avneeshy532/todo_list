import React, { useState } from 'react'
import Input from './input'
import List from "./list"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function App() {
  let [todos, setTodos] = useState(['breakfast', 'lunch', 'dinner'])
  let [editData, setEditData] = useState({index: -1, data: ''})

  const addTodo = (value) => {
    setTodos([...todos, value]);

    toast.success("Todo added successfully")
  }


  const deleteTodo = (value) => {
    // console.log(value);
    let index = todos.indexOf(value);
    
    if(index > -1) {
      todos.splice(index, 1);
      setTodos([...todos])

      toast.success(`${value} deleted successfully`)
    }else {
      toast.error(`something went wrong`)
    }
  }

  const editTodo = (index, data) => {
    setEditData({index, data})
  }

  const updateTodo = (index, data) => {
    todos.splice(index, 1, data);

    setTodos([...todos])
    setEditData({ index: -1, data: ''})

    toast.success("Todo Update successfully")
  }

  return (
    <div className='container mt-4'>
        <Input addTodo={addTodo} editData={editData} updateTodo={updateTodo}/>
        <List todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
        
        <ToastContainer theme='dark'/>       
    </div>
  )
}
