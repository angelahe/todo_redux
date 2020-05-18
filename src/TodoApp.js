import React from "react"
import AddTodo from "./components/AddTodo"
import "./styles.css";

export default function TodoApp() {
    return (
        <div className = "todo-app">
            <h1>Todo List</h1>
            <AddTodo />
        </div>
    );
}