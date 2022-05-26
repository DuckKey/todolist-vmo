import React, { Component } from 'react';
import styles from './todos.module.css'
import Todo from './todo';
import AddTodo from './addtodo';

class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addTodoValue: "",
            todos: [
                {
                    id: 1,
                    value: "todo 1",
                    isDone: false
                },
                {
                    id: 2,
                    value: "todo 2",
                    isDone: true
                },
                {
                    id: 3,
                    value: "todo 3",
                    isDone: false
                }
            ]
        }
    }

    getTime() {
        let d = new Date();
        var n = d.getTime();
        return n;
    }

    handleDelete = todo => {
        const todos = this.state.todos.filter((t) => {
            return t.id !== todo
        });
        this.setState({ todos });
    }

    handleDone = id => {
        const todos = this.state.todos.map(todo => 
            {
                if(todo.id === id) {
                    todo.isDone = !todo.isDone
                    return todo;
                }
                return todo
            })
            this.setState({todos})
    }

    addNewTodo = value => {
        if (value && value.trim() !=='') {
            const todos = [...this.state.todos];
            todos.push(
                {
                    id: this.getTime(),
                    value: value,
                    isDone: false
                }
            );
            this.setState({ addTodoValue: "", todos })
        } else {
            console.log("Please Add Todo Text");
        }
    }

     handleDeleteCompleted = () => {
        const todos = [...this.state.todos];
        const removeTodo = todos.filter(todo =>
                !todo.isDone
            )
        this.setState({todos:removeTodo})
    }

    render() {
        return (
            <div className={styles.todoContainer}>
            <div className={styles.header}>TODO - ITEMS - ClassComponent</div>
                <div className={styles.footer}>
                        <AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue} />
                </div>
                <div className={styles.todos}>
                {this.state.todos.map((todo, index) => (
                    <div key={todo.id}>
                        <Todo index={index+1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
                    </div>
                ))}
                <button className={styles.btnClear} onClick= {this.handleDeleteCompleted}>Clear All Completed</button>
                </div>
            </div>
        );
    }
}

export default Todos;