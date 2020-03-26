import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolistheader from './TodolistHeader';
import TodoList from './TodoList';

function App() {
  

  return (
    <div className="App">
     <Todolistheader/>
     <TodoList/>
    </div>
  );
}

export default App;
