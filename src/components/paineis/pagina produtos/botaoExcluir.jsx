import excluirProduto from "./requisicaoExcluirProduto"

function BotaoExcluir() {

    return (

        <div>

            <div id="botaoDelete" onClick={() => {document.getElementById("adicionarRequisicao").style.display = "none" ,document.getElementById("excluirRequisicao").style.display = 'block'}}><ion-icon name="trash-outline"></ion-icon></div>


            <div id="excluirRequisicao">

                <ion-icon class="fechar" name="close-outline" onClick={() => document.getElementById("excluirRequisicao").style.display = "none"}></ion-icon>

                <div>

                    <h1>Excluir Produtos</h1>


                    <div>
                        <span class="moverSpan">Numero do card para excluir:</span>
                        <input id="numeroDoCard" class="inputRequisicao" type="number" min="0" />
                    </div>

                    <div>

                        <ion-icon class="lixeira2" name="trash-outline" onClick={() => excluirProduto()}></ion-icon>

                    </div>


                </div>

            </div>

        </div>

    )
}

export default BotaoExcluir