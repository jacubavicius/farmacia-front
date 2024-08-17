import React, { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { buscar } from '../../../services/Service';
import Produto from '../../../models/Produto';
import CardProdutos from '../cardProdutos/CardProduto';

function ListaProdutos() {
    const [produto, setProduto] = useState<Produto[]>([]);


    async function buscarProdutos() {
        try {
            await buscar('/produtos', setProduto);
          } catch (error: any) {
              alert('Erro ao buscar Produtos.')      
          }
    }

    useEffect(() => {
        buscarProdutos();
      }, [produto.length]); 

    return (
        <>
      {produto.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
        <div className="flex justify-center w-full my-4">
         <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produto.map((produto) => (
              <>
                <CardProdutos key={produto.id} produto={produto} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaProdutos;