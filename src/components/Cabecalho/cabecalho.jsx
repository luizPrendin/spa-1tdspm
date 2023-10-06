import { Link, useLocation } from "react-router-dom"
import{AiOutlineHome as H} from "react-icons/ai"
import "./Cabecalho.scss"


export default function Cabecalho() {

  const rotaAtual = useLocation()

  console.log("Rota atual: " +rotaAtual.pathname)

  return (
    <header className="cabecalho">
          
          
          <ul>
            <li>
                <Link to="/" className={rotaAtual.pathname =="/" ? "active":""}>Home - <H/></Link>
            </li>
            <li>
                <Link to="/produtos" className={rotaAtual.pathname =="/produtos" ? "active":""}>Produtos</Link>
            </li>
            <li>
                <Link to="/cadastrar/produto" className={rotaAtual.pathname =="/cadastrar/produto" ? "active":""}>Cadastrar Produtos</Link>
            </li>
            
          </ul>
        
        </header>
  )
}
