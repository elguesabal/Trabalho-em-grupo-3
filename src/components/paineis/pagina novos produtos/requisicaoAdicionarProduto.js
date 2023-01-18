import url from "../../url";


async function adicionarProduto() {
    let usuario = document.getElementById('loginome').value

    axios.get(url + 'usuario')
    .then(resposta => {
        const user = resposta.data.map((data) => data.login).indexOf(usuario)
        const userId = resposta.data[user].id

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

            axios.put(url + 'dados/' + userId, arrayFinal)
            .then(resposta => alert('item adicionado'))
            .catch(erro => alert('nao faz sentido'))
        })
        .catch(erro => alert('ta aki'))
    })
    .catch(erro => alert(erro))
}

export default adicionarProduto