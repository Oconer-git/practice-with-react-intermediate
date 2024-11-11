import './App.css';
import React from 'react';
import tasksReducer from './state-management/reducer/tasksReducer';
import { useReducer } from 'react';
import Navbar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import TasksContext from './state-management/contexts/tasksContext';
import AuthContext from './state-management/contexts/authContext';
import AuthProvider from './state-management/authProvider';

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, [])

  return (
    <AuthProvider>
      <TasksContext.Provider value={{tasks, dispatch: tasksDispatch}}>
        <Navbar/>
        <HomePage/>
      </TasksContext.Provider>
    </AuthProvider>
  )
}

export default App;
