import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer= ()=>{
    return (
        <>
            <footer>
                <div className='footer'>                    
                    <a href="https://www.facebook.com/waffli.tos.50 " className="footer__iconos"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a href="https://www.instagram.com/wafflitosvm/ " className="footer__iconos"><FontAwesomeIcon icon={faInstagram}/></a>
                <div>
                    <p className="footer__textos">
                    Seguinos en nuestras redes.<br></br>Sitio creado por Florencia Gomez©
                    </p>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;