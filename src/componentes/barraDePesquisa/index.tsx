import addsimbol from '../../assets/add.svg'
import styles from './styles.module.css'

export function BarraDePesquisa() {
    return (
        <form className={styles.formHome}>
            <input
                type="text"
                placeholder='Adicione uma nova tarefa'
                className={styles.inputFormHome}
            />
            <button type='submit' className={styles.botaoCriarHome}>
                Criar
                <img src={addsimbol} />
            </button>
        </form>
    )
}