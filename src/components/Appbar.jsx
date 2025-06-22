import {useState } from "react";
import './Appbar.css';
import Cart from "./Cart.jsx";
import {useCartUI} from "../contexts/CartUIContext.jsx";
import { useCart } from "../contexts/CartContext.jsx";
import CartIcon from "../icons/CartIcon.jsx";
import SearchIcon from "../icons/SearchIcon.jsx";
import FilterIcon from "../icons/FilterIcon.jsx";



function Appbar() {
    const [cartOpen, setCartOpen] = useState(false);
    const { shouldWiggle } = useCartUI();
    const { cartCount } = useCart();

    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);

    return (
        <>
            <nav className="appbar">
                <div className={"icon-container"}>
                    <SearchIcon
                        className="icon-spacing"
                        role="img"
                        aria-label="Search"
                        style={{ width: '30px', height: '30px' }}
                    />
                    <FilterIcon
                        className="nav-icon left-icon"
                        role="img"
                        aria-label="Search"
                        style={{ width: '30px', height: '30px' }}
                    />
                </div>

                <img src="/assets/candle_co_logo.png" alt="Logo" className="logo" />

                <div
                    className="cart-icon-wrapper position-relative"
                    onClick={openCart}
                    style={{ cursor: 'pointer' }}
                >
                    <CartIcon
                        className={`nav-icon right-icon ${shouldWiggle ? 'wiggle' : ''}`}
                        role="img"
                        aria-label="Cart"
                        style={{ width: '24px', height: '24px' }}
                    />
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

