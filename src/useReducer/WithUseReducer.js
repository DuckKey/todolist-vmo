import React, { useReducer, useState } from 'react'
import styles from './WithUseReducer.module.css'

function reducer(state, action) {
    switch(action.type) {
        case "add-todo":
            if(action.text && action.text.trim() !== '') {
                return {
                     todos: [ { text: action.text, completed: false},...state.todos]
                    }
            }
        case "toggle-todo":
            return {
                todos: state.todos.map((todo, index) =>
                index ===action.index ?{...todo, completed:!todo.completed} : todo) 
            }
        case "delete-todo":
            const newTodos = [...state.todos]
            newTodos.splice(action.index, 1)
            return {
                ...state,
                todos: newTodos
            }
        case "clearAll-todo":
            const value = state.todos.filter( todo =>
                !todo.completed
            )
            return {
                todos: value
            } 
        default:
            return state
    }
}

const WithUseReducer = () => {
    const [{todos} ,dispatch] = useReducer(reducer, {todos: [
        {
        id:1,
        text:'nguyen trung duc',
        completed:false
        },
        {
            id:1,
            text:'nguyen trung duc',
            completed:true
        },
        {
            id:1,
            text:'nguyen trung duc',
            completed:false
        }
]})
    const [text, setText] = useState()
    return (
    <div className={styles.todoContainer}>
        <div className={styles.header}>TODO - ITEMS - UseReducer</div>
        <form
            className={styles.form}
            onSubmit={e => {    
                e.preventDefault();
                setText("")
            }}
        >
            <input placeholder='add' className={styles.input} value={text} onChange = {e => setText(e.target.value)} />
            <button className={styles.btnAdd} onClick={()=> {dispatch({type:"add-todo", text})}}>add</button>
        </form>
        {todos.map((todo,index) => (
            <div>
            <div
                className={styles.task}
                key={index}
                onClick= {() => dispatch({type: "toggle-todo", index})}
                style= {{
                    textDecoration: todo.completed ? "line-through" : ""
                }}
            >
                {todo.text}
                <div>
                    <button className={styles.btnDelete} onClick={() => dispatch({type: "delete-todo",index})}>delete</button>
                    <button className={styles.btnCompleted} onClick={() => dispatch({type: "toggle-todo"})}>completed</button>
                </div>
            </div>
            </div>
        ))}
        <button className={styles.btnClearAll} onClick ={()=> dispatch({type: "clearAll-todo"})}>Clear All Completed</button>
        
    </div>
    )
}

export default WithUseReducer