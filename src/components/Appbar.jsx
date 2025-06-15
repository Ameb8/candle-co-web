import {useState } from "react";
import './Appbar.css';
import Cart from "./Cart.jsx";
import {useCartUI} from "../contexts/CartUIContext.jsx";
import { useCart } from "../contexts/CartContext.jsx";


function Appbar() {
    const [cartOpen, setCartOpen] = useState(false);
    const { shouldWiggle } = useCartUI();
    const { cartCount } = useCart();

    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);

    return (
        <>
            <nav className="appbar">
                <span className="nav-icon left-icon" role="img" aria-label="Search">🔍</span>
                <img src="/assets/candle_co_logo.png" alt="Logo" className="logo" />

                <div className="cart-icon-wrapper position-relative" onClick={openCart} style={{ cursor: 'pointer' }}>
                    <span
                        className={`nav-icon right-icon ${shouldWiggle ? 'wiggle' : ''}`}
                        role="img"
                        aria-label="Cart"
                    >
                        🛒
                    </span>
                    {cartCount > 0 && (
                        <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                            style={{ fontSize: '0.6rem' }}
                        >
                            {cartCount}
                        </span>
                    )}
                </div>
            </nav>
            <Cart isOpen={cartOpen} onClose={closeCart} />
        </>
    );
}

export default Appbar;
