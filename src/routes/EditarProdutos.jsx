import { useParams } from "react-router-dom"
import {ListaProdutos} from"../components/ListaProdutos"

export default function EditarProdutos() {

  document.title = "Editar Produtos";

  //Recuperando o ID do produto selecionado com useParams()
  const {id} = useParams()

  const produtoRecuperadoDaListaById = ListaProdutos.filter(item => item.id == id );

  return (
    <div>
      <h1>
        Editar - Produtos
      </h1>
      <p>Produto Selecionado -{produtoRecuperadoDaListaById[0].nome}</p>
    </div>
  )
}
