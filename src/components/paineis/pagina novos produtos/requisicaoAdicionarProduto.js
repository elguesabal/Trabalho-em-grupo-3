import url from "../../url";
import login from "../pagina login/requisicaoLogin";


async function adicionarProduto() {
    let usuario = document.getElementById('loginome').value

    axios.get(url + 'usuario')
    .then(resposta => {
        const user = resposta.data.map((data) => data.login).indexOf(usuario)

        axios.get(url + 'dados')
        .then(resposta => {
            let arrayProdutos = resposta.data[user].produtos

            let produto = document.getElementById('nomeproduto').value
            let quantidade = document.getElementById('quantidadeproduto').value
            let imagem = document.getElementById('imagemlink').value

            arrayProdutos.push({ produto: produto, quantidade: quantidade, imagem: imagem})

            let arrayFinal = {
                            id: user,
                            produtos: arrayProdutos
                        }

            axios.put(url + 'dados/' + user, arrayFinal)
            .then(resposta => login())
            .catch(erro => alert('nao faz sentido'))
        })
        .catch(erro => alert(erro))
    })
    .catch(erro => alert(erro))
}

export default adicionarProduto