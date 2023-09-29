import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('')


  const handleDeleteTask = (id) => {
    // Filter the toDos array to remove the task with the specified ID
    const updatedToDos = toDos.filter((task) => task.id !== id);
    setToDos(updatedToDos);
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="todoList">
      <div className="input">
        <input type="text" placeholder="🖊️ Add item..." value={toDo} onChange={(e) => setToDo(e.target.value)} />
        <i className="fas fa-plus" onClick={() => setToDos([...toDos, {id: Date.now() ,text:toDo,status:false}])}></i>
      </div>
      <div className="todos">
        {toDos.map((value) => {
          return (
            <div className="todo">
              <div className="left">
                <input value={value.status} type="checkbox" name="" id=""/>
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i onClick={()=> handleDeleteTask(value.id)} className="fas fa-times"></i>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
    </div>
   );
  }

export default App;