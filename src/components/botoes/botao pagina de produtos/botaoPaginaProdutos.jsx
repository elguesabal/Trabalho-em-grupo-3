import meteNoneBlock from "../funcaMudaPainel"

function BotaoProdutos() {

    return(
        <li class="list" id="corNav2" onClick={() => meteNoneBlock('n2')}>
            <a href="#">
                <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                <span class="text">About</span>
            </a>
        </li>
    )
}

export default BotaoProdutos