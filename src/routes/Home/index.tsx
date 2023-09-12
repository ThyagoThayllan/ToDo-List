import { ChangeEvent, FormEvent, useState } from "react"
import styles from './styles.module.css'
import iconeTarefaVazia from '../../assets/empty.svg'
import addsimbol from '../../assets/add.svg'
import { Task } from "../../componentes/Tarefa"

interface TarefasProps {
    key: string,
    task: string,
    finished?: boolean
}

export const Home = () => {

    //  STATEs
    const [tasks, setTasks] = useState<TarefasProps[]>([])

    const [task, setTask] = useState('')

    //  CONSTs
    const createdTasks = tasks.length

    //  FUNCTIONs
    const handleNewTask = (e: ChangeEvent<HTMLInputElement>) => {

        setTask(e.target.value)
    }

    const handleCreateTask = (event: FormEvent) => {
        event.preventDefault();

        //  Criando um novo objeto TarefasProps com key, tarefa e status padrão como "pendente".
        const newTask: TarefasProps = {
            key: task,
            task: task,
            finished: false
        }

        //  Adicionando a nova tarefa à Lista de Array ***tarefas***.
        setTasks([...tasks, newTask])
        setTask('')
    }

    return (
        <div className={styles.home}>
            <div>
                <form className={styles.formHome} onSubmit={handleCreateTask}>
                    <input
                        type="text"
                        placeholder='Adicione uma nova tarefa'
                        className={styles.inputFormHome}
                        onChange={handleNewTask}
                    />
                    <button type='submit' className={styles.botaoCriarHome}>
                        Criar
                        <img src={addsimbol} />
                    </button>
                </form>

                <div className={styles.homeContainer}>
                    <header className={styles.header}>
                        <div className={styles.criadas}>
                            Tarefas criadas
                            <span className={styles.contadorDeTarefa}>
                                {createdTasks}
                            </span>
                        </div>

                        <div className={styles.concluidas}>
                            Tarefas concluídas
                            <span className={styles.contadorDeTarefa}>
                                {createdTasks}
                            </span>
                        </div>
                    </header>

                    <div className={styles.listaDeAtividades}>
                        {tasks.length === 0
                            ? (
                                <div className={styles.quandoVazio}>
                                    <img src={iconeTarefaVazia} alt="" />
                                    <div>
                                        <p style={{ fontWeight: 'bold' }}>Você não tem tarefas cadastradas</p>
                                        <p>Crie tarefas e organize seus itens a cumprir</p>
                                    </div>
                                </div>)
                            : (
                                <div>{
                                    tasks.map((task) => {
                                        return (
                                            <Task
                                                key={task.key}
                                                task={task.task}
                                            />
                                        )
                                    })}
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}