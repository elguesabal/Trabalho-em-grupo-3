import atualizarEstoque from "./requisicaoAtualizaEstoque"



function BotaoExcluir() {

    const divExcluir = document.getElementById("excluirRequisicao")


    function mostrarExcluir(){
        
        if(divExcluir.style.display == "none"){

            divExcluir.style.display = "block"

        } else {
            divExcluir.style.display = "none"
        }
    }


    return (

        <div>


            <div id="botaoDelete" onClick={mostrarExcluir}><ion-icon name="trash-outline"></ion-icon></div>

            <div id="excluirRequisicao">



                <div>

                    <h1>Excluir Produtos</h1>


                    <div>
                        <span class="moverSpan">Numero do card para excluir:</span>
                        <input class="inputRequisicao" type="number" min="0" />


                    </div>

                    <div>

                        <ion-icon class="lixeira2" name="trash-outline"></ion-icon>

                    </div>


                </div>



            </div>





        </div>

    )
}

export default BotaoExcluir