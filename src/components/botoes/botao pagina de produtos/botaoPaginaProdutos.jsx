import meteNoneBlock from "../funcaMudaPainel"

function BotaoProdutos() {

    return(
        <li class="list" id="corNav2" onClick={() => meteNoneBlock('n2')}>
            <a href="#">
                <span class="icon"><ion-icon name="eye-outline"></ion-icon></span>
                <span class="text">Visualizar</span>
            </a>
        </li>
    )
}

export default BotaoProdutos