import './App.css';
import React from 'react';
import LoginStatus from './state-management/LoginStatus';
import tasksReducer from './state-management/reducer/tasksReducer';
import { useReducer } from 'react';
import Navbar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import TasksContext from './state-management/contexts/tasksContext';
function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, [])

  return (
    <TasksContext.Provider value={{tasks,dispatch}}>
      <Navbar/>
      <HomePage/>
    </TasksContext.Provider>
  )

}

export default App;
