import React from 'react';
import './App.css';
import TodoList from "./TodoList";

function App() {
    const todoListTitle_1: string = "What to learn"
    const todoListTitle_2: string = "What to buy"
    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={""}/>
            <TodoList title={todoListTitle_2} tasks={""}/>
        </div>
    );
}

export default App;
