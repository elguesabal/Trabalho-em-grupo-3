import meteNoneBlock from "../funcaMudaPainel";

function BotaoRodape() {

    return(
        <li class="list" id="corNav5" onClick={() => meteNoneBlock('n5')}>
            <a href="#">
                <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
                <span class="text">Settings</span>
            </a>
        </li>
    )
}

export default BotaoRodape