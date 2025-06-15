import { useState } from 'react';
import ShopBy from './ShopBy';
import './Navbar.css';

function Navbar() {
    const [showShopBy, setShowShopBy] = useState(false);

    const toggleShopBy = () => setShowShopBy(prev => !prev);

    return (
        <>
            <nav className="navbar navbar-beige-bg shadow-sm justify-content-center">
                <ul className="nav flex-nowrap justify-content-center gap-navbar">
                    <li className="nav-item">
                        <button className="nav-link btn btn
                        -link">
                            Inventory
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn btn-link" onClick={toggleShopBy}>
                            Shop By ▼
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn btn
                        -link">
                            About Us
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn btn
                        -link">
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
            {showShopBy && (
                <div className="shopby-dropdown bg-light shadow-sm p-3">
                    <ShopBy />
                </div>
            )}
        </>
    );
}

export default Navbar;
