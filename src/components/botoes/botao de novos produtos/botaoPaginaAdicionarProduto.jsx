import meteNoneBlock from "../funcaMudaPainel"

function BotaoPaginaAdicionarProduto() {

    return(
        <li class="list" id="corNav3" onClick={() => meteNoneBlock('n3')}>
            <a href="#">
                <span class="icon"><ion-icon name="chatbubble-outline"></ion-icon></span>
                <span class="text">Messages</span>
            </a>
        </li>
    )
}

export default BotaoPaginaAdicionarProduto