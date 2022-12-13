import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

function App() {
    const todoListTitle: string = "What to learn"
    const todoListTitle_2: string = "What to buy"

    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "ES6 & TS", isDone: true},
        {id: 3, title: "REACT", isDone: false},
    ])




    // let tasks: Array<TaskType> = [
    //     {id: 1, title: "HTML & CSS", isDone: true},
    //     {id: 2, title: "ES6 & TS", isDone: true},
    //     {id: 3, title: "REACT", isDone: false},
    // ]

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    return (
        <div className="App">
            <TodoList
                removeTask={removeTask}
                title={todoListTitle}
                tasks={tasks}/>
            {/*<TodoList title={todoListTitle_2} tasks={tasks_2}/>*/}
        </div>
    );
}

export default App;
