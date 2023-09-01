import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from "./routes/Home.jsx"
import Produtos from"./routes/Produtos.jsx"
import Error from"./routes/Erro404.jsx"
import EditarProdutos from"./routes/EditarProdutos.jsx"





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />

  </React.StrictMode>,
)
