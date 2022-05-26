import React, { useState } from 'react'
import styles from './ImmerJs.module.css'
import { useImmerReducer } from 'use-immer';

function reducer(state, action) {

    switch(action.type) {
        case "toggle-todo":
            for(let i =0; i < state.length; i++) {
                if(state[i].id === action.payload) {
                    state[i].completed = !state[i].completed    
                }
            }
            break
        case "delete-todo":
            for(let i = 0; i < state.length; i++ ) {
                console.log(state[i].id === action.id);
                if (state[i].id === action.payload ) {
                    state.splice(i,1)
                }
            }
            break
        case "clearAll-todo":
            for(let i = 0; i < state.length; i++ ) {
                if(state[i].completed ) {
                    state.splice(i,1)
                }
            }
            break
        case "add-todo":
            if(action.text && action.text.trim() !== '') {
                    state.push({id:Date.now(), text: action.text, completed: false})
                    
            }
            break
        default:
            return state
    }
}

const WithImmer = () => {
    const [todos ,dispatch] = useImmerReducer(reducer, [])
    const [text, setText] = useState()
    return (
    <div className={styles.todoContainer}>
        <div className={styles.header}>TODO - ITEMS - useImmerReducer</div>
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
        {todos.map((todo) => (
            <div>
            <div
                className={styles.task}
                key={todo.id}
                style= {{
                    textDecoration: todo.completed ? "line-through" : ""
                }}
            >
                {todo.text}
                <div>
                    <button className={styles.btnDelete} onClick={() => dispatch({type: "delete-todo",payload: todo.id})}>delete</button>
                    <button className={styles.btnCompleted} onClick={() => dispatch({type: "toggle-todo",payload: todo.id})}>completed</button>
                </div>
            </div>
            </div>
        ))}
        <button className={styles.btnClearAll} onClick ={()=> dispatch({type: "clearAll-todo"})}>Clear All Completed</button>
        
    </div>
    )
}

export default WithImmer