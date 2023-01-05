import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType} from "./App";

type TodoListPropsType = {
    title: string
    filter: FilterValueType
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
    changeDodoListFilter: (filter: FilterValueType) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>("")

    const [error, setError] = useState<boolean>(false)

    const tasksItems = props.tasks.length
        ? props.tasks.map((task: TaskType) => {
            const onClickRemoveTaskHandler = () => props.removeTask(task.id)
            const onChangeSetTaskStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(task.id, e.currentTarget.checked)
            const isDoneClasses = task.isDone ? "isDone" : "notIsDone"
            return (
                <li key={task.id}>
                    <input
                        type="checkbox"
                        checked={task.isDone}
                        onChange={onChangeSetTaskStatus}
                    />
                    <span className={isDoneClasses}>{task.title}</span>
                    <button onClick={onClickRemoveTaskHandler}>x</button>
                </li>
            )
        })
        : <span>Tasks list is empty</span>

    const onClickAddTaskTodoListHandler = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle)
        } else {
            setError(true)
        }

        setTitle("")
    }

    const onChangeSetLocalTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setTitle(e.currentTarget.value)
    }
    const onKeyDownAddTaskTodoListHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && onClickAddTaskTodoListHandler()

    const onClickSetAllFilterHandler = () => props.changeDodoListFilter("all")
    const onClickSetActiveFilterHandler = () => props.changeDodoListFilter("active")
    const onClickSetCompletedFilterHandler = () => props.changeDodoListFilter("completed")

    const errorMessageStyle = {color: "red", margin: "0px"}
    const getOnClickSetFilterHandler = (filter: FilterValueType) => () => props.changeDodoListFilter(filter)

    const errorInputClasses = error ? "inputError" : undefined
    const errorMessage = error && <p style={errorMessageStyle}>Please, enter task title</p>

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeSetLocalTitleHandler}
                    onKeyDown={onKeyDownAddTaskTodoListHandler}
                    className={errorInputClasses}
                />
                <button onClick={onClickAddTaskTodoListHandler}>+</button>
                {errorMessage}
            </div>
            <ul>
                {tasksItems}
            </ul>
            <div>
                <button
                    className={props.filter === "all" ? "activeFilter" : undefined}
                    onClick={getOnClickSetFilterHandler("all")}>All
                </button>
                <button
                    className={props.filter === "active" ? "activeFilter" : undefined}
                    onClick={getOnClickSetFilterHandler("active")}>Active
                </button>
                <button
                    className={props.filter === "completed" ? "activeFilter" : undefined}
                    onClick={getOnClickSetFilterHandler("completed")}>Completed
                </button>
            </div>
        </div>
    );
};

export default TodoList;