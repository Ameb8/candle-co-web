import { useState} from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductList from './components/ProductList.jsx'
import Appbar from "./components/Appbar.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutUs from "./components/AboutUs.jsx"
import ContactUs from './components/ContactUs';
import Checkout from "./components/Checkout.jsx";
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
                <Routes>
                    <Route path="/" element={<Navigate to="/inventory" replace />} />
                    <Route path="/inventory" element={<ProductList />} />
                    <Route path="/shopby" element={<ProductList />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/checkout" element={<Checkout />} />

                    {/*
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<div>404 Not Found</div>} />
                    */}
                </Routes>
            </div>
        </div>
    );
}

export default App
