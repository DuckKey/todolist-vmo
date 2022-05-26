import styles from './WithUseState.module.css'

export default function Task({task,handleCompleted,index,handleRemove}){
    return (
        <div className={styles.task} style={{textDecoration : task.completed ? "line-through"  : ""}}>
            {task.title}
            <div className={styles.btn}>
                <button className={styles.btnCompleted} onClick={() => handleCompleted(index)}>completed</button>
                <button className={styles.btnDelete} onClick={() => handleRemove(index)}>remove</button>
            </div>
        </div>
    )
}