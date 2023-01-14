            // AKI ESTOU IMPORTANDO OQ SERA EXIBIDO EM CADA PAINEL
import PaginaLogin from './paineis/pagina login/paginaLogin'
import PaginaProdutos from './paineis/pagina produtos/paginaProdutos'
import PaginaAdicionarProduto from './paineis/pagina novos produtos/paginaAdicionarProduto'
import PaginaColaboradores from './paineis/pagina colaboradores/paginaColaboradores'
import PaginaRodape from './paineis/pagina rodape/paginaRodape'
            // AKI ESTOU IMPORTANDO OQ SERA EXIBIDO EM CADA PAINEL

function Divs() {

    return (
        <div id="movimentaDivs">

            <div id="n1" class="todasDivs">
                <PaginaLogin />
            </div>

            <div id="n2" class="todasDivs">
                <PaginaProdutos />
            </div>

            <div id="n3" class="todasDivs">
                <PaginaAdicionarProduto />
            </div>

            <div id="n4" class="todasDivs">
                <PaginaColaboradores />
            </div>

            <div id="n5" class="todasDivs">
                <PaginaRodape />
            </div>
            
        </div>
    )
}

export default Divs