import meteNoneBlock from "../funcaMudaPainel";

function BotaoColaboradores() {
 
    return(
        <li class="list" id="corNav4" onClick={() => meteNoneBlock('n4')}>
            <a href="#">
                <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                <span class="text">Colaboradores</span>
            </a>
        </li>
    )
}

export default BotaoColaboradores