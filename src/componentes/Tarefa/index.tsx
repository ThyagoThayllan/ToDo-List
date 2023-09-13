import { Trash, CheckCircle } from 'phosphor-react'
import styles from './styles.module.css'
import { useState } from 'react'

interface TarefaProps {
  key: string,
  task: string,
  isTaskFinished: boolean,
  onUpdateTaskStatus: (key: string, isTaskFinished: boolean) => void,
}

export const Task = ({ task, isTaskFinished, onUpdateTaskStatus }: TarefaProps) => {

  const [isFinished, setIsFinished] = useState(false)

  const handleStatus = () => {

    setIsFinished(!isFinished)


    //  Chamando a função que dará acesso ao State no componente Home.
    onUpdateTaskStatus(task, !isTaskFinished)
  }

  return (
    <div className={styles.task}>
      <button
        className={ isFinished === true ? styles.finishedTask : styles.pendingTask}
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
