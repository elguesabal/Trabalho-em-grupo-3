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

    return (
        <div class="navigation">
        <div class="menuToggle"></div>
        <ul>
            <li class="list active">
                <a href="#" id="n1">
                    <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                    <span class="text">Home</span>
                </a>
            </li>

            <li class="list" id="n2">
                <a href="#">
                    <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                    <span class="text">About</span>
                </a>
            </li>

            <li class="list" id="n3">
                <a href="#">
                    <span class="icon"><ion-icon name="chatbubble-outline"></ion-icon></span>
                    <span class="text">Messages</span>
                </a>
            </li>

            <li class="list" id="n4">
                <a href="#">
                    <span class="icon"><ion-icon name="camera-outline"></ion-icon></span>
                    <span class="text">Photos</span>
                </a>
            </li>

            <li class="list" id="n5">
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