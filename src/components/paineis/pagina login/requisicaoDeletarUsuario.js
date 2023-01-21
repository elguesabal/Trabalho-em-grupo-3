import url from "../../url"

function deletarUsuario() {
    const load = document.getElementById('logoLoad')
    load.style.display = 'flex'

    let usuario = document.getElementById('loginome').value

    axios.get(url + 'usuario')
    .then(resposta => {
        const user = resposta.data.map((data) => data.login).indexOf(usuario)

        axios.delete(url + 'dados/' + user)
        .then(resposta => load.style.display = 'none')
        .catch(erro => alert(erro))

        axios.delete(url + 'usuario/' + user)
        .then(resposta => load.style.display = 'none')
        .catch(erro => alert(erro))

        // PAGINA DE LOGIN
        document.getElementById('loginome').value = ''
        document.getElementById('loginsenha').value = ''

        document.getElementById('loginSenhaErrada').textContent = 'Usuário deletado'

        document.getElementById("corpoW").style.display = "none";
        document.getElementById("corpo1").style.display = "flex";
        // PAGINA DE LOGIN

        // PAGINA DE PRODUTO
        document.querySelector('.avisoCuidadooo').style.display = 'flex'
        document.getElementById('gridProdutos').textContent = ''
        // PAGINA DE PRODUTO

        load.style.display = 'none'
    })
    .catch(erro => alert(erro))
}

export default deletarUsuario