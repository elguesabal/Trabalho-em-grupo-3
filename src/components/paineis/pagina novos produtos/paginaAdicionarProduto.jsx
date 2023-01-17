function PaginaAdicionarProduto() {

    return(
        <div>

             <div class="corpo" id="corpo1">
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
                                minLength="0"
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

                        <button id="botaologin" class="botão">
                            Criar
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PaginaAdicionarProduto
