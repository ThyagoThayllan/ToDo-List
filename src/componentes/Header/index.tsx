import logoTodo from '../../imgs/logoTodo.svg'
import { BarraDePesquisa } from '../barraDePesquisa'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img src={logoTodo} />
            </div>

            <nav className={styles.menuNav}>
                <ul>
                    <li><Link to='/'>Início</Link></li>
                    <li><Link to='/historico'>Histórico</Link></li>
                    <li><a href="#">Sobre</a></li>
                </ul>
            </nav>

            <BarraDePesquisa />
        </header>
    )
}