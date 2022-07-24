import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer= ()=>{
    return (
        <>
            <footer>
                <div class="footer">                    
                    <a href="https://www.facebook.com/waffli.tos.50 " class="footerIconos"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a href="https://www.instagram.com/wafflitosvm/ " class="footerIconos"><FontAwesomeIcon icon={faInstagram}/></a>
                <div>
                    <p className="footerTextos">
                    Seguinos en nuestras redes.<br></br>Sitio creado por Florencia Gomez©
                    </p>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;