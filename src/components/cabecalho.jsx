import { Link } from "react-router-dom"
import{AiOutlineHome as H} from "react-icons/ai"

export default function Cabecalho() {
  return (
    <header>
          <h1>Vite  +  React</h1>
          
          <ul>
            <li>
                <Link to="/">Home - <H/></Link>
            </li>
            <li>
                <Link to="/produtos">Produtos</Link>
            </li>
            <li>
                <Link to="/cadastrar/produto">Cadastrar Produtos</Link>
            </li>
            
          </ul>
        
        </header>
  )
}
