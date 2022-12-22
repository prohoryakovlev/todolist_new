import React, {useState} from 'react';
import {FilterValueType} from "./App";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
    changeFilter: (filter: FilterValueType) => void

}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    const [title, setTtitle] = useState<string>("")

    const tasksItems = props.tasks.length

        ? props.tasks.map((task: TaskType) => {
            return (
                <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <button onClick={() => props.removeTask(task.id)}>X</button>
                </li>
            )
        })
        : <span>Tasks list is empty</span>
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                onChange={(e)=>setTtitle(e.currentTarget.value) }/>
                <button onClick={()=> props.addTask("My Task")}>+</button>
            </div>
            <ul>
                {tasksItems}
            </ul>
            <div>
                <button onClick={()=> props.changeFilter("all")}>All</button>
                <button onClick={()=> props.changeFilter("active")}>Active</button>
                <button onClick={()=> props.changeFilter("completed")}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;