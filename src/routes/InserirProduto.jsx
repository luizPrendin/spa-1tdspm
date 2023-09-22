import { useState } from "react"
import { ListaProdutos } from "../components/ListaProdutos"
import { useNavigate } from "react-router-dom"

export default function InserirProduto() {

    document.title='CADASTRAR'

    const navigate =useNavigate();

    let novoID= (ListaProdutos[ListaProdutos.length-1].id+1)

    const [produto, setProduto] = useState({
        id:novoID,
        nome: "",
        desc: "",
        valor: "",
      });

    
    

    const handleChange = (evt)=>{
        evt.preventDefault()

        const {name,value} = evt.target
        setProduto({...produto,[name]:value})
    }

    const handleSubmit = (evt)=>{
        evt.preventDefault();
        ListaProdutos.push(produto)
        navigate("/produtos")
    }

    return (
      <div>
        <h1>Cadastro de Produtos</h1>
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
                <button>CADASTRAR</button>
              </div>
            </fieldset>
          </form>
        </div>

      </div>
    )
  }