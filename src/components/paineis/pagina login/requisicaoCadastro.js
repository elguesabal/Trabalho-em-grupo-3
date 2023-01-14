import url from "../../url";

async function cadastro() {
    let novoUsuario = document.getElementById('inputnome').value
    let novaSenha = document.getElementById('inputsenha').value
    let farmacia = document.getElementById('inputnomefarmacia').value
    let email = document.getElementById('inputemail').value
    let cep = document.getElementById('cep').value
    let bairro = document.getElementById('inputbairro').value
    let rua = document.getElementById('rua').value
    let numero = document.getElementById('inputnumero').value
    let estado = document.getElementById('UF').value
    let cidade = document.getElementById('cidade').value

    axios.get(url + 'usuario')
    .then(resposta => {
        if (resposta.data.map((data) => data.login).indexOf(novoUsuario) == -1) {
            axios.post(url + 'usuario', 
            {
                id: '',
                login: novoUsuario,
                senha: novaSenha,
                farmacia: farmacia,
                email: email,
                cep: cep,
                bairro: bairro,
                rua: rua,
                numero: numero,
                estado: estado,
                cidade: cidade
            })
            .then(resposta => alert('novo usuario criado'))
            .catch(erro => alert('aconteceu algum erro'))

            axios.post(url + 'dados', 
            {
                id: ''
            })
            .then(resposta => alert('ja pode inserir novos produtos'))
            .catch(erro => alert('aconteceu algum erro'))
        } else {
            alert('usuario ja existente')
        }
    })
    .catch(erro => alert('aconteceu algum erro'))
}

export default cadastro