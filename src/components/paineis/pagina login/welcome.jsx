import logout from "./logout";
import deletarUsuario from "./requisicaoDeletarUsuario";

function Welcome() {
    
    return(
        <div>
            <div class="corpo" id="corpoW">
                <div class="box3">
                    <div class="form2">
                        <h2 class="welcometext1">Bem-vindo </h2>
                        <h2 class="welcometext2">ao seu estoque!</h2>

                        <div class="botoes">
                            <button id="botaologin2" class="botão1" onClick={() => logout()}>Sair</button>
                            <button id="botaologin3" class="botão2" onClick={() => deletarUsuario()}>Deletar usuario</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome