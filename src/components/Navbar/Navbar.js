import logo from '../../img/logo.png'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <nav className='navbar'>
                    <Link to="/">
                    <div className='navbar__logo'>
                            <img src={logo} alt="logo wafflito vm" />
                    </div>                    
                    </Link>
                    <div className='navbar__menu'>
                        <div className='navbar__links'>
                            <Link to='/'>Todos</Link>
                            <Link to='categoria/dulces'>Waffles dulces</Link>
                            <Link to='categoria/salado'>Waffles salados</Link>
                            <CartWidget />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;