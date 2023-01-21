import validacao from "./validacaoCadastro";

function Cadastro() {

    return(
        <div class="corpo" id="corpo2">
            <div class="box2">
                <div class="form">
                    <h2>Cadastre-se</h2>


                    <div class="inputBox">
                        <span>Escolha um nome de usuário</span>
                        <input id="inputnome" type="text" required="required"></input>
                        <i></i>
                    </div>


                    <div class="inputBox">
                        <span>Senha</span>
                        <input id="inputsenha" type="password" required="required"></input>
                        <i></i>
                    </div>


                    <div class="inputBox">
                        <span>Nome da farmácia</span>
                        <input id="inputnomefarmacia" type="text" required="required"></input>
                        <i></i>
                    </div>


                    <div class="inputBox">
                        <span>Email para contato</span>
                        <input id="inputemail" type="text" required="required"></input>
                        <i></i>
                    </div>


                    <div class="inputBox">
                        <span>CEP</span>
                        <input id="cep" required="required"></input>
                        <i></i>
                    </div>
                    <span htmlFor="">Não sabe o cep? </span><a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank">Clique aqui!</a>


                    <div class="inputBox">
                        <span>Bairro da unidade</span>
                        <input id="inputbairro" type="text" required="required"></input>
                        <i></i>
                    </div>


                    <div class="inputBox">
                        <span>logradouro</span>
                        <input id="rua" required="required"></input>
                        <i></i>
                    </div>


                    <div class="inputBox">
                        <span>Número</span>
                        <input id="inputnumero" type="number" required="required"></input>
                        <i></i>
                    </div>


                    <div class="inputBox">
                        <span>Estado</span>
                        <input id="UF" type="text" required="required"></input>
                        <i></i>
                    </div>


                    <div class="inputBox">
                        <span>Cidade</span>
                        <input id="cidade" type="text" required="required"></input>
                        <i></i>
                    </div>


                    <div class="links">
                        <a onClick={() => {document.getElementById("corpo1").style.display = "flex"; document.getElementById("corpo2").style.display = "none";}} href="#">Fazer login</a>
                    </div>


                    <button id="botaoenviar" onClick={() => validacao()} value="Enviar" class="botão">CRIAR</button>

                </div>
            </div>
        </div>
    )
}

export default Cadastro