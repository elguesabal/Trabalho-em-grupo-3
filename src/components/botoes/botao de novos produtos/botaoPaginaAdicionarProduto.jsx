import meteNoneBlock from "../funcaMudaPainel"

function BotaoPaginaAdicionarProduto() {

    return(
        <li class="list" id="corNav3" onClick={() => meteNoneBlock('n3')}>
            <a href="#">
                <span class="icon"><ion-icon name="duplicate-outline"></ion-icon></span>
                <span class="text">Adicionar</span>
            </a>
        </li>
    )
}

export default BotaoPaginaAdicionarProduto