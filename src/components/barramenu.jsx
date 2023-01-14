            // AKI ESTOU IMPORTANDO OS BOTOES DA BARRA LATERAL JA COM SUA RESPECTIVAS FUNCOES
import BotaoLogin from "./botoes/botao login/botaoLogin";
import BotaoProdutos from "./botoes/botao pagina de produtos/botaoPaginaProdutos";
import BotaoPaginaAdicionarProduto from "./botoes/botao de novos produtos/botaoPaginaAdicionarProduto";
import BotaoColaboradores from "./botoes/botao colaboradores/botaoColaboradores";
import BotaoRodape from "./botoes/botao rodape/botaoRodape";
            // AKI ESTOU IMPORTANDO OS BOTOES DA BARRA LATERAL JA COM SUA RESPECTIVAS FUNCOES


function BarraMenu() {
    
                                // COMECA AKI ANIMACAO DA BARRA LATERAL
    setTimeout( function() {
        let menuToggle = document.querySelector('.menuToggle');
        let navigation = document.querySelector('.navigation');
        menuToggle.onclick = function () {
            navigation.classList.toggle('active')
        }
        
        let list = document.querySelectorAll('.list');
        function activeLink() {
            list.forEach((item) => 
            item.classList.remove('active'));
            this.classList.add('active');
        }
        
        list.forEach((item) => 
        item.addEventListener('click', activeLink))
    }, 1)
                                // TERMINA AKI ANIMACAO DA BARRA LATERAL

    return (
        <div class="navigation">
            
            <div class="menuToggle"></div>
            
            <ul>
                <BotaoLogin />

                <BotaoProdutos />

                <BotaoPaginaAdicionarProduto />

                <BotaoColaboradores />

                <BotaoRodape />
            </ul>

        </div>   
    )
}

export default BarraMenu