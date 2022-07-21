import logo from '../img/logo.png';

function Navbar(){
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
                        <a href="#">Carrito <span>0</span></a>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Navbar