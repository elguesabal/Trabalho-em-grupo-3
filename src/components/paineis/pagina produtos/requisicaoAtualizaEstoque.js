import url from "../../url"

            // TA DANDO ERRO AO CHAMAR A FUNCAO atualizaEstoque()

async function atualizarEstoque(numeroDoCard) {
    axios.get(url + 'usuario')
    .then(resposta => {
        const user = resposta.data.map((data) => data.login).indexOf(usuario)
        const userId = resposta.data[user].id

        axios.get(url + 'dados')
        .then(resposta => {
            let novaQuantidade = document.getElementById('atualizarEstoque' + numeroDoCard).value

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
            .then(resposta => console.log('estoque atualizado'))
            .catch(erro => console.log('nao faz sentido'))
        })
        .catch(erro => console.log('ta aki'))
    })
    .catch(erro => console.log('oxi deu erro'))
}

export default atualizarEstoque