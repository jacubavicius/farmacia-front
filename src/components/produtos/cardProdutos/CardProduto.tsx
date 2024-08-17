import React from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';

interface CardProdutoProps {
    produto: Produto;    
}

function CardProdutos({produto}: CardProdutoProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>{produto.nome}</header>
      <p className='px-8 pt-3 text-2xl bg-slate-200 uppercase h-full'>{produto.preco}</p>
      <p className='px-8 p-2 text-xl bg-slate-200 h-full'>{produto.marca}</p>
      <div className="flex">
        <Link to='/editarProduto' className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to='/deletarProduto' className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProdutos