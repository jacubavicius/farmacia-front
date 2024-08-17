import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import Produto from '../../../models/Produto';

function FormularioProduto() {
    const [produto, setProduto] = useState<Produto>({} as Produto);

    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/produtos/${id}`, setProduto)
    }

    useEffect(() => {
        if (id !== undefined) {
          buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value
        })

        console.log(JSON.stringify(produto))
    }

    async function gerarNovaProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

        if (id !== undefined) {
            try {
            await atualizar(`/produtos`, produto, setProduto)

            alert('Produto atualizado com sucesso')
            retornar()

            } catch (error: any) {
                alert('Erro ao atualizar a Produto')
            }

        } else {    
            try {
                await cadastrar(`/produtos`, produto, setProduto)    
                alert('Produto cadastrado com sucesso')    
            } catch (error: any) {            
              alert('Erro ao cadastrado a Produto')
            }
          }
    
        retornar()
      }
    
      
      function retornar() {
        navigate("/produtos")
      }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastre um novo tema' : 'Editar tema'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaProduto}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da produto</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-blue-800 hover:bg-blue-400 w-1/2 py-2 mx-auto block"
                    type="submit"
                >
                    {id === undefined ? 'Cadastrar' : 'Editar'}
                </button>
            </form>
        </div>
    );
}
export default FormularioProduto;