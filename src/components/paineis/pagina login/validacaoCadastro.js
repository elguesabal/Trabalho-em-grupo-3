import cadastro from "./requisicaoCadastro"

function validacao() {
    // CAMPOS DO FORMULARIO COM SEUS VALORES
    const usuario = document.getElementById('inputnome').value
    const senha = document.getElementById('inputsenha').value
    const farmacia = document.getElementById('inputnomefarmacia').value
    const email = document.getElementById('inputemail').value
    const cep = document.getElementById('cep').value
    const bairro = document.getElementById('inputbairro').value
    const logradouro = document.getElementById('rua').value
    const numero = document.getElementById('inputnumero').value
    const estado = document.getElementById('UF').value
    const cidade = document.getElementById('cidade').value
    // CAMPOS DO FORMULARIO COM SEUS VALORES

    const caixaErro = document.getElementById('validacao')

    // VALIDACOES
    const validacaoUsuario = usuario.length < 3
    const validacaoSenha = senha.length < 8
    const validacaoFarmacia = farmacia.length < 3
    const validacaoEmail = email.indexOf('@', 3) == -1 || email.indexOf('.com', email.indexOf('@')) == -1
    const validacaoCep = cep.length !== 9 || cep[5] !== '-'
    const validacaoBairro = bairro.length < 3
    const validacaoLogradouro = logradouro < 3
    const validacaoNumero = numero < 1
    const validacaoEstado = estado.length < 3
    const validacaoCidade = cidade.length < 3
    // VALIDACOES

    caixaErro.textContent = ''

    if (validacaoUsuario || validacaoSenha || validacaoFarmacia || validacaoEmail || validacaoCep || validacaoBairro || validacaoLogradouro || validacaoNumero || validacaoEstado || validacaoCidade) {

      document.querySelector('.avisoValidacao').style.display = 'flex'
  
                // USUARIO
      try {
        if (validacaoUsuario) throw caixaErro.innerHTML += `<p class="textoValidacao">Usuário deve conter no mínimo 3 dígitos</p>`;
      }
      catch (erro) {}
                // USUARIO
  
  
                // SENHA
      try {
        if (validacaoSenha) throw caixaErro.innerHTML += `<p class="textoValidacao">Senha deve conter no mínimo 8 dígitos</p>`;
      }
      catch (erro) {}
                // SENHA
  
  
                // NOME DA FARMACIA
      try {
        if (validacaoFarmacia) throw caixaErro.innerHTML += `<p class="textoValidacao">Informe o nome da farmácia</p>`;
      }
      catch (erro) {}
                // NOME DA FARMACIA
  
  
                // EMAIL
      try {
        if (validacaoEmail) throw caixaErro.innerHTML += `<p class="textoValidacao">Informe um email válido</p>`;
      }
      catch (erro) {}
                // EMAIL
  
  
                // CEP
      try {
        if (validacaoCep) throw caixaErro.innerHTML += `<p class="textoValidacao">Informe um cep válido</p>`;
      }
      catch (erro) {
        console.log('cep preenchido corretamente');
      }
                // CEP
  
  
                // ENDERECO
      try {
        if (validacaoBairro) throw caixaErro.innerHTML += `<p class="textoValidacao">Informe o bairro</p>`;
      }
      catch (erro) {
        console.log('bairro preenchido corretamente');
      }
                // ENDERECO
  
  
                // LOGRADOURO
      try {
        if (validacaoLogradouro) throw caixaErro.innerHTML += `<p class="textoValidacao">Informe o logradouro</p>`;
      }
      catch (erro) {
        console.log('rua preenchido corretamente');
      }
                // LOGRADOURO
  
  
                // NUMERO
      try {
        if (validacaoNumero) throw caixaErro.innerHTML += `<p class="textoValidacao">Informe o rua</p>`;
      }
      catch (erro) {
        console.log('numero preenchido corretamente');
      }
                // NUMERO
  
  
                // ESTADO
      try {
        if (validacaoEstado) throw caixaErro.innerHTML += `<p class="textoValidacao">Informe o estado</p>`;
      }
      catch (erro) {
        console.log('estado preenchido corretamente');
      }
                // ESTADO
  
  
                // CIDADE
      try {
        if (validacaoCidade) throw caixaErro.innerHTML += `<p class="textoValidacao">Informe a cidade</p>`;
      }
      catch (erro) {
        console.log('estado preenchido corretamente');
      }
                // CIDADE
    } else {
      document.querySelector('.avisoValidacao').style.display = 'none'
      cadastro()
    }
}

export default validacao