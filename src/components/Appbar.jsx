import './Appbar.css';

function Appbar() {
    return (
        <nav className="appbar">
            <span className="nav-icon left-icon" role="img" aria-label="Search">🔍</span>
            <img src="/assets/candle_co_logo.png" alt="Logo" className="logo" />
            <span className="nav-icon right-icon" role="img" aria-label="Cart">🛒</span>
        </nav>
    );
}

export default Appbar;
