import {useState} from "react";
import './Appbar.css';
import Cart from "./Cart.jsx";

function Appbar() {
    const [cartOpen, setCartOpen] = useState(false);

    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);

    return (
        <>
            <nav className="appbar">
                <span className="nav-icon left-icon" role="img" aria-label="Search">🔍</span>
                <img src="/assets/candle_co_logo.png" alt="Logo" className="logo" />
                <span
                    className="nav-icon right-icon"
                    role="img"
                    aria-label="Cart"
                    onClick={openCart}
                    style={{ cursor: 'pointer' }}
                >
                    🛒
                </span>
            </nav>
            <Cart isOpen={cartOpen} onClose={closeCart} />
        </>
    );
}

export default Appbar;
