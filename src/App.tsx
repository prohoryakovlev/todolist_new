import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";

export type FilterValueType = "all" | "active" | "completed"

function App() {
    const todoListTitle: string = "What to learn"

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML & CSS", isDone: true},
        {id: v1(), title: "ES6 & TS", isDone: true},
        {id: v1(), title: "REACT", isDone: false},
    ])
    const [filter, setFilter] = useState<FilterValueType>("all")

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }
    const changeDodoListFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }
    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTasks([newTask, ...tasks])
    }

    const changeTaskStatus = (taskId: string, isDone: boolean) => {
        setTasks(tasks.map(t => t.id === taskId ? {...t, isDone: isDone} : t))

    }

    const getFilterTasksForRender = () => {
        switch (filter) {
            case "active":
                return tasks.filter(t => !t.isDone)
            case "completed":
                return tasks.filter(t => !t.isDone)
            default:
                return tasks
        }
    }


    const filterTasksForRender: Array<TaskType> = getFilterTasksForRender()

    return (
        <div className="App">
            <TodoList
                filter={filter}
                tasks={filterTasksForRender}
                title={todoListTitle}

                addTask={addTask}
                removeTask={removeTask}
                changeTaskStatus={changeTaskStatus}
                changeDodoListFilter={changeDodoListFilter}
            />

        </div>
    );
}

export default App;
