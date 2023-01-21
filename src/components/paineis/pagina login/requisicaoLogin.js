import url from "../../url";
import atualizarEstoque from "../pagina produtos/requisicaoAtualizaEstoque";

            // TA DANDO ERRO AO CHAMAR A FUNCAO atualizaEstoque()

function login() {
    const load = document.getElementById('logoLoad')
    load.style.display = 'flex'

    let usuario = document.getElementById('loginome').value
    let senha = document.getElementById('loginsenha').value

    axios.get(url + 'usuario')
    .then(resposta => {
        const user = resposta.data.map((data) => data.login).indexOf(usuario)

        if (user == -1 || resposta.data[user].senha !== senha) {
            document.getElementById('loginSenhaErrada').textContent = 'Login ou senha errada'
            
        } else {
            axios.get(url + 'dados')
            .then(resposta => {
                const produtos = resposta.data[user].produtos.map((produtos) => produtos.produto)

                document.getElementById('loginSenhaErrada').textContent = ''

                document.getElementById("corpoW").style.display = "flex";
                document.getElementById("corpo1").style.display = "none";

                document.querySelector('.avisoCuidadooo').style.display = 'none'
                document.getElementById('NovosProdutos').style.display = 'none'

                document.getElementById('containerNovoProduto').style.display = 'flex'

                document.getElementById('gridProdutos').innerHTML = ''
                
                for (let i = 0; i < produtos.length; i++) {

                    document.getElementById('gridProdutos').innerHTML += 

                    `<div class="containerProdutos"">
                        <div class="cardProdutos">
        
                            <div class="face face1">
                                <div class="content">
                                    <img src="${resposta.data[user].produtos[i].imagem}" />
                                    <h3>${resposta.data[user].produtos[i].produto}</h3>
                                </div>
                            </div>
        
                            <div class="face face2">
                                <div class="content">

                                    <p>Número do card: ${i + 1}</>
        
                                    <p class="descricaoProdutos">${resposta.data[user].produtos[i].produto}</p>
        
                                    <div class="estoqueAtual">
                                        <label for="estoque" class="estilizarLabel">Estoque Atual:</label>
                                        <p class="moverP" name="estoque">${resposta.data[user].produtos[i].quantidade}</p>
                                    </div>
        
                                </div>
                            </div>
        
                        </div>
                    </div>`
                }

            })
        }

        load.style.display = 'none'
    })
    .catch(erro => alert('nao deu certo'))
}

export default login