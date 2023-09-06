import { useState } from "react"
import styles from './styles.module.css'

export const Home = () => {

    const [ tarefasCriadas, setTarefasCriadas ] = useState<number>()

    return (
        <div className={styles.home}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <div>{tarefasCriadas ? tarefasCriadas : 0}</div>
                </div>
                <div>
                    <p>Concluídas</p>
                    <div>0</div>
                </div>
            </header>
        </div>
    )
}