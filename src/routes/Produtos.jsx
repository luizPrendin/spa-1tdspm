import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import {GrFormEdit as Editar} from "react-icons/gr";
import {RiDeleteBin2Fill as Excluir} from "react-icons/ri";

export default function Produtos() {

  document.title = "Produtos";

  const estiloDasCelulas = {
    border:"2px solid #ccc",
    fontFamily:"Arial, Trebuchet, sans-serif"
  }

  return (
    <div>
      <h1>LISTA DE PRODUTOS</h1>

      <table style={{border:"2px solid #ccc", borderCollapse:"collapse", margin:"auto"}}>
        <thead>
        <tr>
          <th>ID</th>
          <th>NOME</th>
          <th>DESCRIÇÃO</th>
          <th>PREÇO</th>
          <th>EDITAR</th>
          <th>EXCLUIR</th>       
        </tr>
        </thead>
        <tbody>
        {
          ListaProdutos.map((item,indice)=>(
            <tr key={indice}>
                <td style={estiloDasCelulas}>{item.id}</td>
                <td style={estiloDasCelulas}>{item.nome}</td>
                <td style={estiloDasCelulas}>{item.desc}</td>
                <td style={estiloDasCelulas}>{item.valor}</td>
                <td style={estiloDasCelulas}> <Link to={`/editar/produtos/${item.id}`}><Editar/></Link> | <Link to=
                {`/excluir/produtos/${item.id}`}><Excluir/></Link> </td>
            </tr>
          ))
        }
</tbody>
<tfoot>
  <tr>
    <td colSpan={4}>PRODUTOS LINDOS</td>
  </tr>
</tfoot>
      </table>
    </div>
  )
}