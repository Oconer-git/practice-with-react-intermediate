import './App.css';
import React from 'react';
import Navbar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import AuthProvider from './state-management/AuthProvider';
import {TasksProvider, Tasklist} from './state-management/tasks';

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <Navbar/>
        <HomePage/>
      </TasksProvider>
    </AuthProvider>
  )
}

export default App;
