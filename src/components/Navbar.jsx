import { useState } from 'react';
import ShopBy from './ShopBy';

import './Navbar.css';

function Navbar({ selectedPage, setSelectedPage }) {
    const [showShopByDropdown, setShowShopByDropdown] = useState(false);

    const handleInventoryClick = () => {
        setSelectedPage('inventory');
        setShowShopByDropdown(false);
    };

    const handleAboutUsClick = () => {
        setSelectedPage('aboutus');
        setShowShopByDropdown(false);
    };

    const handleContactClick = () => {
        setSelectedPage('contact');
        setShowShopByDropdown(false);
    };

    const toggleShopBy = () => {
        setShowShopByDropdown(prev => !prev);
        setSelectedPage('shopby');
    };

    return (
        <>
            <nav className="navbar navbar-beige-bg shadow-sm justify-content-center">
                <ul className="nav flex-nowrap justify-content-center gap-navbar">
                    <li className="nav-item">
                        <button
                            className={`nav-link btn btn-link ${selectedPage === 'inventory' ? 'active' : ''}`}
                            onClick={handleInventoryClick}
                        >
                            Inventory
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link btn btn-link ${selectedPage === 'shopby' ? 'active' : ''}`}
                            onClick={toggleShopBy}
                        >
                            Shop By ▼
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link btn btn-link ${selectedPage === 'aboutus' ? 'active' : ''}`}
                            onClick={handleAboutUsClick}
                        >
                            About Us
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link btn btn-link ${selectedPage === 'contact' ? 'active' : ''}`}
                            onClick={handleContactClick}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Show ShopBy dropdown only when selected */}
            {showShopByDropdown && (
                <div className="shopby-dropdown bg-light shadow-sm p-3">
                    <ShopBy />
                </div>
            )}
        </>
    );
}

export default Navbar;
