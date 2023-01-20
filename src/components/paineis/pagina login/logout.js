function logout() {
    // TELA DE LOAD
    document.getElementById('logoLoad').style.display = 'flex'
    // TELA DE LOAD

    // PAGINA DE LOGIN
    document.getElementById('loginome').value = ''
    document.getElementById('loginsenha').value = ''

    document.getElementById("corpoW").style.display = "none";
    document.getElementById("corpo1").style.display = "flex";
    // PAGINA DE LOGIN

    // PAGINA DE PRODUTO
    document.querySelector('.avisoCuidadooo').style.display = 'flex'
    document.getElementById('gridProdutos').textContent = ''
    // PAGINA DE PRODUTO

    setTimeout( function() {
        document.getElementById('logoLoad').style.display = 'none'
    }, 500)
}

export default logout