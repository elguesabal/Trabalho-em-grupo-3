import url from "../../url";

function login() {
    const load = document.getElementById('logoLoad')
    load.style.display = 'flex'

    let usuario = document.getElementById('loginome').value
    let senha = document.getElementById('loginsenha').value

    axios.get(url + 'usuario')
    .then(resposta => {
        const user = resposta.data.map((data) => data.login).indexOf(usuario)

        if (user == -1 || resposta.data[user].senha !== senha) {
            alert('login ou senha errada')
            
        } else {
            alert('login feito com sucesso')

            axios.get(url + 'dados')
            .then(resposta => {
                const produtos = resposta.data[user].produtos.map((produtos) => produtos.produto)
                
                for (let i = 0; i < produtos.length; i++) {
                    document.getElementById('grid').innerHTML += 
                    `<div class="card">
                        <div class="lines"></div>
                        <div class="imgBx">
                            <img src=""/>
                        </div>
                        <div class="content">
                            <div class="details">
                                <div class="estoque">
                                    <h2>${resposta.data[user].produtos[i].produto}</h2>
                                    <p>Estoque: ${resposta.data[user].produtos[i].valor}</p>
                                </div>
                                <br/>
                                <input type="number" min="0"/>
                            
                                <a>Atualizar quantidade</a>
                                <ion-icon class="lixo" name="trash-outline"></ion-icon>
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