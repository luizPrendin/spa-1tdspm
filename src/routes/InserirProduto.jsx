import { useState } from "react"
import { ListaProdutos } from "../components/ListaProdutos"

export default function InserirProduto() {

    document.title='CADASTRAR'
    let novoID= (ListaProdutos[ListaProdutos.length-1].id+1)

    const [produto,setProduto]=useState =({
        id:novoID,
        nome:"",
        des:"",
        valor:""

    });

    return (
      <div>
        <h1>Cadastro de Produtos</h1>
      </div>
    )
  }