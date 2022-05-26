import { useState, useRef } from "react"
import styles from './WithUseState.module.css'


export default function AddTasks({handleAddTasks}) {
    const [value, setValue] = useState("")
    const inputRef = useRef()
    const handleAddTask = (e) => {
        e.preventDefault()
        if(!value) return
        handleAddTasks(value)
        setValue("")
        inputRef.current.focus()
    }
    return (
        <>
        <form className={styles.form}>
        <input
            ref={inputRef}
            className={styles.input}
            value={value}
            placeholder='add'
            type="text"
            onChange={e => setValue(e.target.value)}
        >
        </input>    
        <button className={styles.btnAdd} onClick={handleAddTask}>Add</button>
        </form>
        </>
    )
}