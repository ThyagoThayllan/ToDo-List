import styles from './styles.module.css'

interface TarefaProps {
    key: string,
    task: string,
    finished?: boolean
}

export const Task = ({task}: TarefaProps) => {
  return (
    <div className={styles.task}>
      {task}
    </div>
  )
}
