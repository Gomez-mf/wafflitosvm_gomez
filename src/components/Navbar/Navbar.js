import logo from '../../img/logo.png'
import CartWidget from './CartWidget';

const Navbar = ()=>{
    return (
        <>
        <header>
            <nav>
                <div className='logo'>
                    <img src={logo} alt="logo wafflito vm" />
                </div>
                <div className='menu'>
                    <div className='links'>
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