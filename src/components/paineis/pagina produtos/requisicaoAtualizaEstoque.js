import url from "../../url"


async function atualizarEstoque() {
    let usuario = document.getElementById('loginome').value

    axios.get(url + 'usuario')
    .then(resposta => {
        const user = resposta.data.map((data) => data.login).indexOf(usuario)
        const userId = resposta.data[user].id

        axios.get(url + 'dados')
        .then(resposta => {
            let novaQuantidade = document.getElementById('novaQuantidade').value
            let numeroDoCard = document.getElementById('numeroDoCard').value - 1

            let arrayProdutos = resposta.data[user].produtos
            let todosProdutos = resposta.data[user].produtos
            let novoEstoque = arrayProdutos[numeroDoCard]
            
            novoEstoque = {
                            produto: resposta.data[user].produtos[numeroDoCard].produto,
                            quantidade: novaQuantidade,
                            imagem: resposta.data[user].produtos[numeroDoCard].imagem
                          }

            todosProdutos[numeroDoCard] = novoEstoque

            let arrayFinal = {
                id: user,
                produtos: todosProdutos
            }

            axios.put(url + 'dados/' + userId, arrayFinal)
            .then(resposta => alert('estoque atualizado'))
            .catch(erro => alert('nao faz sentido'))
        })
        .catch(erro => alert('ta aki'))
    })
    .catch(erro => alert('oxi deu erro'))
}

export default atualizarEstoque