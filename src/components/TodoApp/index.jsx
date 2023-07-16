import { useState } from 'react';
import React from 'react';
import '../../style/TodoApp/index.css';

const TodoApp = () => {

  const [todo,setTodo] =useState("");
  const [todos,setTodos] = useState([]);
 

  const handleSubmit=(e)=>{
    e.preventDefault();

    

    if(todo!== ""){
      setTodos([{id:`${todo}-${Date.now()}` ,todo}, ...todos])
    }

   

  };
  const handleDelete=(id)=>{
    const delTodo = todos.filter((item)=>(item.id!==id));
    setTodos([...delTodo])

  };

  
  

  return (
    <div className='App'>
        <div className='main-container'>
            <h1 className='heading'>Todo List App</h1>
            <form className='form' onSubmit={handleSubmit}>
                <input className='input' type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}  />
                <button type ="submit" className='button'>Go</button>
                
            </form>
            <ul className='all-todos'>

            {
              todos.map((t)=>(
                <li className='single-todo'>
                <span className='todo-text' key={t.id} >{t.todo }</span>
                <button className='button' onClick={()=>handleDelete(t.id)}>Delete</button>
              </li>
              ))
            }
             
            </ul>
        </div>
    </div>
  )
}

export default TodoApp;