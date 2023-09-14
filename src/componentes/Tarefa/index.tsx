import { Trash } from 'phosphor-react'
import styles from './styles.module.css'
import { useState } from 'react'
import backgroundStatusIcon from '../../assets/backgroundStatusIcon.svg'
import borderStatusIcon from '../../assets/borderStatusIcon.svg'
import checkIcon from '../../assets/checkIcon.svg'
import pendingTask from '../../assets/pendingTask.svg'

interface TarefaProps {
  key: string,
  task: string,
  isTaskFinished: boolean,
  onUpdateTaskStatus: (key: string, isTaskFinished: boolean) => void,
  onDeleteTask: (key: string) => void
}

export const Task = ({ task, isTaskFinished, onUpdateTaskStatus, onDeleteTask }: TarefaProps) => {

  const [isFinished, setIsFinished] = useState(false)

  const handleStatus = () => {

    setIsFinished(!isFinished)


    //  Chamando a função que dará acesso ao State no componente Home.
    onUpdateTaskStatus(task, !isTaskFinished)
  }

  const handleDelete = () => {
    //  Chamando a função onDeleteTask para quando clicar no botão.
    onDeleteTask(task)
  }

  return (
    <div className={styles.task}>
      <button
        onClick={handleStatus}
      >
        {
          isFinished === true
            ? (<div className={styles.finishedTask}>
                <img src={borderStatusIcon} />
                <img src={backgroundStatusIcon} />
                <img src={checkIcon} />
              </div>)
            : (<img src={pendingTask} className={styles.pendingTask} />)
        }
      </button>
      <p className={styles.taskContent}>
        {task}
      </p>
      <button 
        className={styles.deleteTask}
        onClick={handleDelete}
      >
        <Trash size={24} />
      </button>

    </div>
  )
}
