import meteNoneBlock from "../funcaMudaPainel";

function BotaoRodape() {

    return(
        <li class="list" id="corNav5" onClick={() => meteNoneBlock('n5')}>
            <a href="#">
                <span class="icon"><ion-icon name="chatbubbles-outline"></ion-icon></span>
                <span class="text">Informações</span>
            </a>
        </li>
    )
}

export default BotaoRodape