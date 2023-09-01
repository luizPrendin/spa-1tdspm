
import { Link } from "react-router-dom"

export default function Erro404() {
  document.title = "Erro404"
  return (
    <div>
      <h1>
        Pagina nao encontrada - 404
      </h1>
      <p>Voltar para o inicio - <Link to="/"></Link></p>
    </div>
  )
}
