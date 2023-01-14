import meteNoneBlock from "../funcaMudaPainel";

function BotaoLogin() {

    return(
        <li class="list active" id="corNav1" onClick={() => meteNoneBlock('n1')}>
            <a href="#" >
                <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                <span class="text">Home</span>
            </a>
        </li>
    )
}

export default BotaoLogin