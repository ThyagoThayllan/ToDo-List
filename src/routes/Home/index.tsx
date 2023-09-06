import { useState } from "react"
import styles from './styles.module.css'

export const Home = () => {

    type TarefasProps = {
        status: 'concluida' | 'pendente',
        tarefa: string
    }

    const [ tarefas, setTarefas] = useState<TarefasProps[]>([])
    const [ tarefasCriadas, setTarefasCriadas ] = useState<number>()
    const [ tarefasConcluidas, setTarefasConcluidas ] = useState<number>()

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
                    {tarefas.length === 0 ? (<h1>Lista de Tarefas</h1>) : (<h1>Existe</h1>)}
                </div>

            </div>
        </div>
    )
}