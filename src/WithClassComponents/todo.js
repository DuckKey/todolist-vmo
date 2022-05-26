import React, { Component } from 'react';
import styles from './todos.module.css'

class Todo extends Component {
   

    render() {
        const {todo, fooDoneDone, index, fooDelete} = this.props
        return (
                <div className={styles.task} style={{textDecoration: todo.isDone ? "line-through" : ""}} >
                    {todo.value}
                <div className={styles.btn}>
                    <button className={styles.btnCompleted} onClick={() => fooDoneDone(todo.id)}>Completed</button>
                    <button className={styles.btnDelete} onClick={() => fooDelete(todo.id)}>Delete</button>
                </div>
                </div>
        );
        
    }
}

export default Todo;