import { ChangeEvent, FormEvent, useState } from "react"
import styles from './styles.module.css'
import iconeTarefaVazia from '../../assets/empty.svg'
import addsimbol from '../../assets/add.svg'
import { Task } from "../../componentes/Tarefa"


export const Home = () => {

    //  TYPEs
    interface TarefasProps {
        key: string,
        task: string,
        isTaskFinished: boolean,
    }

    //  STATEs
    const [tasks, setTasks] = useState<TarefasProps[]>([])
    
    const [task, setTask] = useState('')
    
    //  CONSTs
    const createdTasks = tasks.length

    const completedTasks = tasks.filter((task) => task.isTaskFinished === true).length

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
            isTaskFinished: false
        }

        //  Adicionando a nova tarefa à Lista de Array ***tarefas***.
        setTasks([...tasks, newTask])
        setTask('')
    }

    const updateTaskStatus = (key: string, isTaskFinished: boolean) => {
        //  Criando um novo Array com State atualizado.
        const updatedTasks = tasks.map((task) => {
            if (task.key === key) {
                return { ...task, isTaskFinished };
            }
            return task;
        });

        ////  Atualizar o State ***tasks*** com o novo Array.
        setTasks(updatedTasks)
        console.log(updatedTasks)
    }

    const deleteTask = (keyToBeDelete: string) => {
        //  Filtra o array de tarefas para remover a tarefa com a key correspondente
        const updatedTasks = tasks.filter((task) => task.key !== keyToBeDelete)

        //  Atualizando o State de Tasks com o novo array, sem a task deletada.
        setTasks(updatedTasks)
    }

    return (
        <div className={styles.home}>
            <div>
                <form className={styles.formHome} onSubmit={handleCreateTask}>
                    <input
                        type="text"
                        value={task}
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
                            Concluídas
                            <span className={styles.contadorDeTarefa}>
                                {completedTasks === 0 ? completedTasks : `${completedTasks} de ${createdTasks}`}
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
                            : tasks.map((task) => {
                                return(
                                    
                                    <Task
                                        key={task.key}
                                        task={task.task}
                                        isTaskFinished={task.isTaskFinished}
                                        onUpdateTaskStatus={updateTaskStatus}
                                        onDeleteTask={deleteTask}
                                    />
                                
                            )})


                        }
                    </div>
                </div>
            </div>
        </div>
    )

}