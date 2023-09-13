import { Trash, CheckCircle } from 'phosphor-react'
import styles from './styles.module.css'
import { useState } from 'react'

interface TarefaProps {
  key: string,
  task: string,
  finished?: boolean
}

export const Task = ({ task, finished }: TarefaProps) => {

  const [ isFinished, setIsFinished ] = useState(finished || false)

  const handleStatus = () => {

    setIsFinished(!isFinished)
  }

  return (
    <div className={styles.task}>
      <button
        className={isFinished ? styles.finishedTask : styles.pendingTask}
        onClick={() => handleStatus()}
      >
        <CheckCircle size={24} />
      </button>
      <p className={styles.taskContent}>
        {task}
      </p>
      <div className={styles.deleteTask}>
        <Trash size={24} />
      </div>

    </div>
  )
}
