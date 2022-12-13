import React, {useEffect, useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

type FilterValueType = "all" | "active" | "completed"

function App() {
    const todoListTitle: string = "What to learn"
    const todoListTitle_2: string = "What to buy"

    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "ES6 & TS", isDone: true},
        {id: 3, title: "REACT", isDone: false},
    ])
    const [filter, setFilter] = useState<FilterValueType>("all")

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }


    const getFilterTasksForRender = () => {
        switch (filter) {
            case "active":
                return tasks.filter(t => t.isDone === false)
            case "completed":
                return tasks.filter(t => t.isDone === true)
            default:
                return tasks
        }
    }


    const filterTasksForRender: Array<TaskType> = getFilterTasksForRender()

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
