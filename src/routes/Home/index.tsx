import { useState } from "react"
import styles from './styles.module.css'

export const Home = () => {

    const [tarefasCriadas, setTarefasCriadas] = useState<number>()
    const [tarefasConcluidas, setTarefasConcluidas] = useState<number>()

    return (
        <div className={styles.home}>
            <div className={styles.homeContainer}>

                <header>
                    <div className={styles.criadas}>Tarefas criadas <span className={styles.contadorDeTarefa}>
                        {tarefasCriadas ? tarefasCriadas : 0}
                    </span></div>

                    <div className={styles.concluidas}> Tarefas concluídas <span className={styles.contadorDeTarefa}>
                        {tarefasConcluidas ? tarefasConcluidas : 0}
                    </span></div>
                </header>

                <div className={styles.listaDeAtividades}>
                    <h1>Atividades</h1>
                </div>

            </div>
        </div>
    )
}