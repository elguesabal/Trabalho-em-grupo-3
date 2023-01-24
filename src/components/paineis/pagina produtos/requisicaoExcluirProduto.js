import url from "../../url"
import login from "../pagina login/requisicaoLogin"

function excluirProduto() {
    let usuario = document.getElementById('loginome').value

    axios.get(url + 'usuario')
    .then(resposta => {
        const user = resposta.data.map((data) => data.login).indexOf(usuario)
    
        axios.get(url + 'dados')
        .then(resposta => {
            let produtos = resposta.data[user].produtos
    
            const numeroDoCard = document.getElementById('numeroDoCard').value - 1
    
            produtos.splice(numeroDoCard, 1)
    
            axios.put(url + 'dados/' + user, {id: user, produtos})
            .then(resposta => login())
            .catch(erro => alert('nao faz sentido'))
        })
        .catch(erro => alert(erro))
    })
    .catch(erro => alert(erro))
}

export default excluirProduto