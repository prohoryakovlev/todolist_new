import React, {useEffect, useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

type FilterValueType = "all"| "active" | "completed"

function App() {
    const todoListTitle: string = "What to learn"
    const todoListTitle_2: string = "What to buy"

    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "ES6 & TS", isDone: true},
        {id: 3, title: "REACT", isDone: false},
    ])
    const [filter, setFilter] = useState<FilterValueType>("all")

    const removeTask = (taskId: number) => {setTasks(tasks.filter(t => t.id !== taskId))
    }

    let filterTasksForRender;
    if(filter === "all") {
        filterTasksForRender = tasks
    }
    if(filter === "active") {
        filterTasksForRender = tasks.filter(t => t.isDone === false)
    }
    if(filter === "completed") {
        filterTasksForRender = tasks.filter(t => t.isDone === true)
    }

    return (
        <div className="App">
            <TodoList
                removeTask={removeTask}
                title={todoListTitle}
                tasks={filterTasksForRender}/>
            {/*<TodoList title={todoListTitle_2} tasks={tasks_2}/>*/}
        </div>
    );
}

export default App;
