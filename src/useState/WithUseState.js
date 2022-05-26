import React, { useState, useRef } from 'react'
import styles from './WithUseState.module.css'
import Task from './Task'
import AddTasks from './AddTask'

console.log(styles)

const WithUseState = () => {

  const [tasks, setTasks] = useState([
      {
        title:'nguyen trung duc',
        completed: false
      },
      {
        title:'nguyen trung duc',   
        completed: false
      },  
      {
        title:'nguyen trung duc',
        completed: true
      }
  ])
  const handleAddTasks = title => {
      if (title && title.trim() !== '') {
          const newTasks = [{title, completed: false} ,...tasks]
          setTasks(newTasks)
      }
  }

  const handleCompleted = index => {
        const taskss = tasks.map((task,idx) => 
            index === idx ? {...task,completed:!task.completed} : task
        )
        setTasks(taskss)
  }

  const handleRemove = index => {
      const newTasks = [...tasks]
      newTasks.splice(index,1)
      setTasks(newTasks)
  }

  const handleClearAll = () => {
      const removeTask = tasks.filter((task) => {
          return !task.completed
      })
      setTasks(removeTask)

  }

  return (
    <div className={styles.todoContainer}>
        <div className={styles.header}>TODO - ITEMS - UseState</div>
        <div className={styles.footer}>
        <AddTasks handleAddTasks = {handleAddTasks}/>
        </div>
        <div className={styles.tasks}>
            {tasks.map((task,index) => (
            <Task 
                task={task}
                index = {index}
                key = {index}
                handleCompleted = {handleCompleted}
                handleRemove = {handleRemove}
            />
            ))}
        <button className={styles.btnClear} onClick={() => handleClearAll()}>Clear All Completed</button>
        </div>
    </div>
  )
}

export default WithUseState

