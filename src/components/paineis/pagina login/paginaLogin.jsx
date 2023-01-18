import login from "./requisicaoLogin";
import cadastro from "./requisicaoCadastro";

function PaginaLogin() {
  function mudar() {
    document.getElementById("corpo2").style.display = "flex";
    // mudar display none no css
    document.getElementById("corpo1").style.display = "none";
  }
  function mudar2() {
    document.getElementById("corpo1").style.display = "flex";
    // mudar display none no css
    document.getElementById("corpo2").style.display = "none";
  }
  function mudar3() {
    document.getElementById("corpoW").style.display = "flex";
    // mudar display none no css
    document.getElementById("corpo1").style.display = "none";
  }

  function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(
      field.value.indexOf("@") + 1,
      field.value.length
    );

    if (
      usuario.length >= 1 &&
      dominio.length >= 3 &&
      usuario.search("@") == -1 &&
      dominio.search("@") == -1 &&
      usuario.search(" ") == -1 &&
      dominio.search(" ") == -1 &&
      dominio.search(".") != -1 &&
      dominio.indexOf(".") >= 1 &&
      dominio.lastIndexOf(".") < dominio.length - 1
    ) {
      return true;
    } else {
      return false;
    }
  }

  // function Enviar(inputemail) {                TEMPORARIAMENTE DESATIVADO
  //     var nome = document.getElementById("inputnome");

  //     if (
  //         nome != "" &&
  //         validacaoEmail(inputemail)
  //     ) {
  //         alert(
  //             nome.value +
  //             " os seus dados foram encaminhados com sucesso"
  //         );
  //     } else {
  //         alert("Verifique se todos os campos foram preenchidos corretamente.");
  //     }
  // }

  return (
    <div>
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
              <input
                id="loginsenha"
                type="password"
                required="required"
              ></input>
              <i></i>
            </div>

            <div class="links">
              <a onClick={() => mudar()} href="#">
                Cadastre-se
              </a>
            </div>
            <button id="botaologin" class="botão" onClick={() => mudar3()}>
              LOGIN
            </button>
          </div>
        </div>
      </div>

      <div class="corpo" id="corpo2">
        <div class="box2">
          <div class="form">
            <h2>Cadastre-se</h2>

            <div class="inputBox">
              <span>Escolha um nome de usuário</span>
              <input id="inputnome" type="text" required="required"></input>
              <i></i>
            </div>
            <p class="mensagemerro" id="mensagemerro"></p>
            <div class="inputBox">
              <span>Senha</span>
              <input
                id="inputsenha"
                type="password"
                required="required"
              ></input>
              <i></i>
            </div>
            <p class="mensagemerro" id="mensagemerro"></p>
            <div class="inputBox">
              <span>Nome da farmácia</span>
              <input
                id="inputnomefarmacia"
                type="text"
                required="required"
              ></input>
              <i></i>
            </div>
            <p class="mensagemerro" id="mensagemerro"></p>
            <div class="inputBox">
              <span>Email para contato</span>
              <input id="inputemail" type="text" required="required"></input>
              <i></i>
            </div>
            <p class="mensagemerro" id="mensagemerro"></p>
            <div class="inputBox">
              <span>CEP</span>
              <input id="cep" type="number" required="required"></input>
              <i></i>
            </div>
            <p class="mensagemerro" id="mensagemerro"></p>
            <div class="inputBox">
              <span>Bairro da unidade</span>
              <input id="inputbairro" type="text" required="required"></input>
              <i></i>
            </div>
            <p class="mensagemerro" id="mensagemerro"></p>
            <div class="inputBox">
              <span>Rua</span>
              <input id="rua" type="number" required="required"></input>
              <i></i>
            </div>
            <p class="mensagemerro" id="mensagemerro"></p>
            <div class="inputBox">
              <span>Número</span>
              <input id="inputnumero" type="number" required="required"></input>
              <i></i>
            </div>
            <p class="mensagemerro" id="mensagemerro"></p>
            <div class="inputBox">
              <span>Estado</span>
              <input id="UF" type="text" required="required"></input>
              <i></i>
            </div>
            <p class="mensagemerro" id="mensagemerro"></p>
            <div class="inputBox">
              <span>Cidade</span>
              <input id="cidade" type="text" required="required"></input>
              <i></i>
            </div>
            <p class="mensagemerro" id="mensagemerro"></p>
            <div class="links">
              <a onClick={() => mudar2()} href="#">
                Fazer login
              </a>
            </div>

            <button
              id="botaoenviar"
              onClick={() => mudar2()}
              value="Enviar"
              class="botão"
            >
              CRIAR{" "}
              {/* RETIREI O Enviar() PQ ESTAVA DANDO ERRO NO cadastro() QUANDO CLICKAVA */}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="corpo" id="corpoW">
          <div class="box3">
            <div class="form2">
              <h2 class="welcometext1">Bem-vindo </h2>
              <h2 class="welcometext2">ao seu estoque!</h2>
              <div class="botoes">
              <button id="botaologin" class="botão1">
                Sair
              </button>
              <button id="botaologin" class="botão2">
                Deletar usuario
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaLogin;
