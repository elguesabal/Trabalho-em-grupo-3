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


                                                // COMECA AKI A TROCA DE PAGINAS
    function meteNoneBlock(akiEntraIdDiv) {
        for (let i = 1; i < 6; i++) {
            document.getElementById(`n${i}`).style.display = 'none'
        }
        document.getElementById(akiEntraIdDiv).style.display = 'block'
    }
                                                // TERMINA AKI A TROCA DE PAGINAS


    return (
        <div class="navigation">
            
            <div class="menuToggle"></div>
            
            <ul>
                <li class="list active" id="corNav1" onClick={() => meteNoneBlock('n1')}>
                    <a href="#" >
                        <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                        <span class="text">Home</span>
                    </a>
                </li>

                <li class="list" id="corNav2" onClick={() => meteNoneBlock('n2')}>
                    <a href="#">
                        <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                        <span class="text">About</span>
                    </a>
                </li>

                <li class="list" id="corNav3" onClick={() => meteNoneBlock('n3')}>
                    <a href="#">
                        <span class="icon"><ion-icon name="chatbubble-outline"></ion-icon></span>
                        <span class="text">Messages</span>
                    </a>
                </li>

                <li class="list" id="corNav4" onClick={() => meteNoneBlock('n4')}>
                    <a href="#">
                        <span class="icon"><ion-icon name="camera-outline"></ion-icon></span>
                        <span class="text">Photos</span>
                    </a>
                </li>

                <li class="list" id="corNav5" onClick={() => meteNoneBlock('n5')}>
                    <a href="#">
                        <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
                        <span class="text">Settings</span>
                    </a>
                </li>
            </ul>

        </div>   
    )
}

export default BarraMenu