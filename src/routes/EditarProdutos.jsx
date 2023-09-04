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

      <div>
          <form>
            <fieldset>
              <legend>PRODUTO SELECIONADO</legend>
              <div>
                <label htmlFor="idNome">Nome do Produto:</label>
                <input type="text" name="nome" id="idNome" defaultValue={produtoRecuperadoDaListaById[0].nome}/>
              </div>
              <div>
                <label htmlFor="idDesc">Descrição do Produto:</label>
                <input type="text" name="desc" id="idDesc" defaultValue={produtoRecuperadoDaListaById[0].desc}/>
              </div>
              <div>
                <label htmlFor="idValor">Valor do Produto:</label>
                <input type="text" name="valor" id="idValor" defaultValue={produtoRecuperadoDaListaById[0].valor}/>
              </div>
            </fieldset>
          </form>
        </div>

   </div>
  )
}
