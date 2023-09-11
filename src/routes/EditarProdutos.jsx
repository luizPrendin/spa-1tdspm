import { useNavigate,useParams } from "react-router-dom"
import { useState } from "react"
import {ListaProdutos} from"../components/ListaProdutos"

export default function EditarProdutos() {

  document.title = "Editar Produtos";

  //Recuperando o ID do produto selecionado com useParams()
  const {id} = useParams()

  const navegar  = useNavigate();

  const produtoRecuperadoDaListaById = ListaProdutos.filter(item => item.id == id );

  const [produto, setProduto] = useState({
    id: produtoRecuperadoDaListaById[0].id,
    nome: produtoRecuperadoDaListaById[0].nome,
    desc: produtoRecuperadoDaListaById[0].desc,
    valor: produtoRecuperadoDaListaById[0].valor
  });

  

  const handleChange = (event)=>{

      const {name,value} = event.target;
      setProduto({...produto,[name]:value})

  }

  const handleSubmit =(event)=>{
    event.preventDefault();

    let indice
    ListaProdutos.forEach((item,index)=>{
      if(item.id == produto.id){
          indice = index
      }
      
    })
    
    ListaProdutos.splice(indice,1,produto)
    navegar("/produtos")

  }

  return (
    <div>
      <h1>
        Editar - Produtos
      </h1>

      <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>PRODUTO SELECIONADO</legend>
              <div>
                <input type="hidden" name="id" value={produto.id} />
              </div>
              <div>
                <label htmlFor="idNome">Nome do Produto:</label>
                <input type="text" name="nome" id="idNome" value={produto.nome} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="idDesc">Descrição do Produto:</label>
                <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="idValor">Valor do Produto:</label>
                <input type="text" name="valor" id="idValor" value={produto.valor} onChange={handleChange}/>
              </div>
              <div>
                <button>EDITAR</button>
              </div>
            </fieldset>
          </form>
        </div>

   </div>
  )
}
