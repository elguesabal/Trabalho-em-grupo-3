import adicionarProduto from "./requisicaoAdicionarProduto"
import AvisoNovosProdutos from "./avisoNovosProdutos"

function PaginaAdicionarProduto() {

    return(
        <div>

            <AvisoNovosProdutos />

             <div class="corpo" id="containerNovoProduto">
                <div class="box">
                    <div class="form">
                        <h2>Novo produto</h2>

                        <div class="inputBox">
                            <span>Nome do produto</span>
                            <input id="nomeproduto" type="text" required="required"></input>
                            <i></i>
                        </div>

                        <div class="inputBox">
                            <span>Quantidade</span>
                            <input
                                id="quantidadeproduto"
                                type="number"
                                min="0"
                                required="required"
                            ></input>
                            <i></i>
                        </div>
                        <div class="inputBox">
                            <span>Link da imagem </span>
                            <input
                                id="imagemlink"
                                type="text"
                                required="required"
                            ></input>
                            <i></i>
                        </div>

                        <button id="botaologin" class="botão" onClick={() => adicionarProduto()}>
                            Criar
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PaginaAdicionarProduto