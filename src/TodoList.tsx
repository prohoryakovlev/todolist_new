import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
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
    const [title, setTitle] = useState<string>("")
    const tasksItems = props.tasks.length
        ? props.tasks.map((task: TaskType) => {
            const onClickRemoveTaskHandler = () => () => props.removeTask(task.id)
            return (
                <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <button onClick={onClickRemoveTaskHandler}>X</button>
                </li>
            )
        })
        : <span>Tasks list is empty</span>

    const onClickAddTaskTodoListHandler = () => {
        props.addTask(title)
        setTitle("")
    }

    const onChangeSetLocalTitleHandler = () => (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onKeyDawnAddTaskTodoListHandler = () => (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && onClickAddTaskTodoListHandler()

    const onClickSetAllFilterHandler = () => () => props.changeFilter("all")
    const onClickSetActiveFilterHandler = () => () => props.changeFilter("active")
    const onClickSetCompletedFilterHandler = () => () => props.changeFilter("completed")

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeSetLocalTitleHandler}
                    onKeyDown={onKeyDawnAddTaskTodoListHandler}
                />
                <button onClick={onClickAddTaskTodoListHandler}>+</button>
            </div>
            <ul>
                {tasksItems}
            </ul>
            <div>
                <button onClick={onClickSetAllFilterHandler}>All</button>
                <button onClick={onClickSetActiveFilterHandler}>Active</button>
                <button onClick={onClickSetCompletedFilterHandler}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;