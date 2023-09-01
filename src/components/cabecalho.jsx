import { Link } from "react-router-dom"
import{AiOutlineHome as H} from"react-icons/ai"

export default function cabecalho() {
  return (
    <header className="cabecalho">
          <h1>Vite  +  React</h1>
          
          <ul>
            <li>
                <Link to="/">Home - <H/></Link>
            </li>
            <li>
                <Link to="/produtos">Produtos</Link>
            </li>
            <li>
                <Link to="/editar/produtos/1">Produto - 1</Link>
            </li>
            <li>
                <Link to="/editar/produtos/2">Produto - 2</Link>
            </li>
            <li>
                <Link to="/editar/produtos/3">Produto - 3</Link>
            </li>
          </ul>
        
        </header>
  )
}
