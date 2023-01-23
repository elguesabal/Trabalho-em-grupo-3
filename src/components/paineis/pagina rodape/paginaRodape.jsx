function PaginaRodape() {

    return (
        <div>
            
            <div class="corpo" id="corpoRodape">
                <div class="box4">
                    <div class="form">
                        <h2>Gostaria de enviar um feedback?</h2>

                        <div class="inputBox">
                            <span>Digite seu email:</span>
                            <input id="emailfeedback" type="text" required="required"></input>
                            <i></i>
                        </div>

                        <div class="inputBox">
                            <textarea placeholder="digite sua mensagem..." class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button  class="botão3" >
                        Enviar
                        </button>
                    </div>
                </div>
            </div>

            <div class="canva">
                <iframe loading="lazy" class="canva2"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFYgvHt1lE&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                </iframe>
            </div>


            <div id="redesSocias">
                <a class="redesSocias" href="https://facebook.com/" target="blank"><ion-icon class="iconRedeSocial" name="logo-facebook"></ion-icon></a>
                
                <a class="redesSocias" href ="https://twitter.com/" target="blank"><ion-icon class="iconRedeSocial" name="logo-twitter"></ion-icon></a>

                <a class="redesSocias" href ="https://www.youtube.com/" target="blank"><ion-icon class="iconRedeSocial" name="logo-youtube"></ion-icon></a>
                
                <a class="redesSocias" href ="https://www.instagram.com/" target="blank"><ion-icon class="iconRedeSocial" name="logo-instagram"></ion-icon></a>
                
                <a class="redesSocias" href ="https://br.linkedin.com/" target="blank"><ion-icon class="iconRedeSocial" name="logo-linkedin"></ion-icon> </a>
            </div>
              
            <div>
                
                
                <h1>Institucional</h1> 
                
                <p>Trabalhe Conosco</p>

                <p>Aplicativos</p>

                <p>Canal De Ouvidoria</p>

                <p>Venda No Marketplace</p>
            </div>

        </div>
        
    )
}

export default PaginaRodape
