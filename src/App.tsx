import './App.css';
import React from 'react';
import tasksReducer from './state-management/reducer/tasksReducer';
import { useReducer } from 'react';
import Navbar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import TasksContext from './state-management/contexts/tasksContext';
import authReducer from './state-management/reducer/authReducer';
import AuthContext from './state-management/contexts/authContext';

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, [])
  const[user, authDispatch] = useReducer(authReducer, '');

  return (
      <AuthContext.Provider value={{user, dispatch: authDispatch}}>
        <TasksContext.Provider value={{tasks, dispatch: tasksDispatch}}>
          <Navbar/>
          <HomePage/>
        </TasksContext.Provider>
      </AuthContext.Provider>
  )
}

export default App;
