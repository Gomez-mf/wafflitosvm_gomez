import logo from '../../img/logo.png'
import CartWidget from './CartWidget';
import ItemCount from '../ItemCount/ItemCount';

const Navbar = ()=>{
    return (
        <>
        <header>
            <nav>
                <div class="logo">
                    <img src={logo} alt="logo wafflito vm" />
                </div>
                <div class="menu">
                    <div class="links">
                        <a href="#">Nosotros</a>
                        <a href="#">Productos</a>
                        <a href="#">Carrito <span>0</span><CartWidget/></a>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Navbar;