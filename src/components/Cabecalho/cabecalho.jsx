import { Link } from "react-router-dom"
import{AiOutlineHome as H} from "react-icons/ai"
import "./Cabecalho.scss"


export default function Cabecalho() {
  return (
    <header className="cabecalho">
          
          
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
