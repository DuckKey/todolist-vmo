import React, { Component } from 'react';
import styles from './todos.module.css'
class AddTodo extends Component {
    
    state = {
        defaultValue: "",
        value: this.props.addTodoValue
    }

    handleChange = (e) => { 
        //Updating local component state
        this.setState({
            value: e.target.value
        });
    }

    clearInput = () => {
        //Clear existing value in input
        document.getElementById("todoValue").value = "";
        
        //Updating local component state
        this.setState({value:""});
    }

    addTodo = () => {
        //Call method reference in Todos component using props
        this.props.fooAddTodo(this.state.value);
        this.clearInput();
    }

    render() {
        return (
            <div className={styles.form}>
                <input className={styles.input} type="text" id="todoValue" placeholder="ToDo" onChange={this.handleChange} />
                <button onClick={this.addTodo} className={styles.btnAdd} type="button">Add</button>
            </div>
        );
    }
}

export default AddTodo;