import atualizarEstoque from "./requisicaoAtualizaEstoque"


function BotaoAdicionar() {

    return (

        <div>

            <div id="botaoAtualizar" onClick={() =>{document.getElementById("excluirRequisicao").style.display = "none", document.getElementById("adicionarRequisicao").style.display = "block"}}><ion-icon name="refresh-outline"></ion-icon></div>

            <div id="adicionarRequisicao">

                <ion-icon class="fechar" name="close-outline" onClick={() => document.getElementById("adicionarRequisicao").style.display = "none"}></ion-icon>

                <div>

                    <h1>Atualizar estoque</h1>

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