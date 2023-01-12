function BarraMenu() {
    
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

    function botao1() {
        document.getElementById('n2').style.display = 'none'
        document.getElementById('n3').style.display = 'none'
        document.getElementById('n4').style.display = 'none'
        document.getElementById('n5').style.display = 'none'
        
        document.getElementById('n1').style.display = 'block'
    }

    function botao2() {
        document.getElementById('n1').style.display = 'none'
        document.getElementById('n3').style.display = 'none'
        document.getElementById('n4').style.display = 'none'
        document.getElementById('n5').style.display = 'none'
        
        document.getElementById('n2').style.display = 'block'
    }

    function botao3() {
        document.getElementById('n1').style.display = 'none'
        document.getElementById('n2').style.display = 'none'
        document.getElementById('n4').style.display = 'none'
        document.getElementById('n5').style.display = 'none'
        
        document.getElementById('n3').style.display = 'block'
    }

    function botao4() {
        document.getElementById('n1').style.display = 'none'
        document.getElementById('n2').style.display = 'none'
        document.getElementById('n3').style.display = 'none'
        document.getElementById('n5').style.display = 'none'
        
        document.getElementById('n4').style.display = 'block'
    }

    function botao5() {
        document.getElementById('n1').style.display = 'none'
        document.getElementById('n2').style.display = 'none'
        document.getElementById('n3').style.display = 'none'
        document.getElementById('n4').style.display = 'none'
        
        document.getElementById('n5').style.display = 'block'
    }



    return (
        <div class="navigation">
        <div class="menuToggle"></div>
        <ul>
            <li class="list active" id="corNav1" onClick={botao1}>
                <a href="#" >
                    <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                    <span class="text">Home</span>
                </a>
            </li>

            <li class="list" id="corNav2" onClick={botao2}>
                <a href="#">
                    <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                    <span class="text">About</span>
                </a>
            </li>

            <li class="list" id="corNav3" onClick={botao3}>
                <a href="#">
                    <span class="icon"><ion-icon name="chatbubble-outline"></ion-icon></span>
                    <span class="text">Messages</span>
                </a>
            </li>

            <li class="list" id="corNav4" onClick={botao4}>
                <a href="#">
                    <span class="icon"><ion-icon name="camera-outline"></ion-icon></span>
                    <span class="text">Photos</span>
                </a>
            </li>

            <li class="list" id="corNav5" onClick={botao5}>
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