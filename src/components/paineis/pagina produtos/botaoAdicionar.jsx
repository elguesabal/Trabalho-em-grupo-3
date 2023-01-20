import atualizarEstoque from "./requisicaoAtualizaEstoque"

function BotaoAdicionar() {

    const divAtualizar = document.getElementById("adicionarRequisicao")

    function mostrarAtualizar(){
        
        if(divAtualizar.style.display == "none"){
            
            divAtualizar.style.display = "block"
        } else{
            divAtualizar.style.display = "none"
        }
    }


    return (

        <div>

            <div id="botaoAtualizar" onClick={mostrarAtualizar}><ion-icon name="refresh-outline"></ion-icon></div>

            <div id="adicionarRequisicao">

                <div>

                    <h1>Adicionar Produtos</h1>

                    <div>
                        <span class="moverSpan">Numero do card com novo estoque:</span>
                        <input id="numeroDoCard" class="inputRequisicao" type="number" min="0" />
                    </div>

                    <div>
                        <span>Novo estoque:</span>
                        <input id="novaQuantidade" class="inputRequisicao" type="number" min="0" />
                    </div>

                    <div>
                        <button id="botaoRequisicao" onClick={() => atualizarEstoque()}>Atualizar</button>
                    </div>


                </div>

            </div>



        </div>




    )
}

export default BotaoAdicionar