import login from "./requisicaoLogin";

function Login() {

    return(
        <div class="corpo" id="corpo1">
            <div class="box">
                <div class="form">
                    <h2>Entre</h2>

                    <div class="inputBox">
                        <span>Nome de usuário</span>
                        <input id="loginome" type="text" required="required"></input>
                        <i></i>
                    </div>

                    <div class="inputBox">
                        <span>Senha</span>
                        <input id="loginsenha" type="password" required="required"></input>
                        <i></i>
                    </div>

                    <div class="links">
                        <a onClick={() => {document.getElementById("corpo2").style.display = "flex"; document.getElementById("corpo1").style.display = "none";}} href="#">Cadastre-se</a>
                    </div>

                    <p id="loginSenhaErrada"></p>
                    <button id="botaologin" class="botão" onClick={() => {login()}}>LOGIN</button>
                </div>
            </div>
        </div>
    )
}

export default Login