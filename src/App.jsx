import { useState} from "react";
import ProductList from './components/ProductList.jsx'
import Appbar from "./components/Appbar.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutUs from "./components/AboutUs.jsx"
import ContactUs from './components/ContactUs';
import './App.css';
import FilterCategory from "./components/FilterMenu.jsx";

function App() {
    // Tracks current page to display
    const [selectedPage, setSelectedPage] = useState('inventory');

    return (
        <div className="d-flex flex-column vh-100">
            <div>
                <Appbar />
                <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
            <div className="flex-grow-1 overflow-auto">
                {selectedPage === 'inventory' && <ProductList />}
                {selectedPage === 'shopby' && <ProductList />}
                {selectedPage === 'aboutus' && <AboutUs />}
                {selectedPage === 'contact' && <ContactUs />}
            </div>
        </div>
    );
}

export default App
