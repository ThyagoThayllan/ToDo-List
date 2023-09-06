import { Outlet } from 'react-router-dom'
import { Header } from './componentes/Header'
import './global.css'

export function App() {

  return (
    <div>
      <Header />
      
      <Outlet />
    </div>
  )
}

export default App
