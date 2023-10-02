import { Link } from "react-router-dom";

import {GrFormEdit as Editar} from "react-icons/gr";
import {RiDeleteBin2Fill as Excluir} from "react-icons/ri";
import style from "./Produtos.module.css";
import { useEffect, useState } from "react";
import ModalInserir from "../components/ModalInserir/ModalInserir";
import "./Produtos.scss"

export default function Produtos() {

  document.title = "Produtos";

  const[ListaProdutoExterna,setListaProdutoExterna]=useState([{}])

  useEffect(()=>{
  fetch("http://localhost:5000/produtos",{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }

  })
  .then((response)=> response.json())
  .then(data => {setListaProdutoExterna(data)})
  .catch(error => console.log(error))

},[])

  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>LISTA DE PRODUTOS</h1>

      {open ?<ModalInserir open ={open} setOpen={setOpen}/>:""}

      <button onClick={()=>setOpen(true)}>Cadastrar Produto</button>

      <table className={style.tblEstilo} >
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
          ListaProdutoExterna.map((item,indice)=>(
            <tr key={indice} className={style.tblLine}>
                <td >{item.id}</td>
                <td >{item.nome}</td>
                <td >{item.desc}</td>
                <td >{item.valor}</td>
                <td > <Link to={`/editar/produtos/${item.id}`}><Editar/></Link>   </td>
                <td><Link to={`/excluir/produtos/${item.id}`}><Excluir/></Link></td>
            </tr>
          ))
        }
</tbody>
<tfoot>
  <tr>
    <td>PRODUTOS LINDOS</td>
  </tr>
</tfoot>
      </table>
    </div>
  )
}