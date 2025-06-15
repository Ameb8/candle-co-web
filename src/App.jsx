
import ProductList from './components/ProductList.jsx'
import Appbar from "./components/Appbar.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutUs from "./components/AboutUs.jsx"
import './App.css';
import FilterCategory from "./components/FilterMenu.jsx";

function App() {
    return (
        <div className="d-flex flex-column vh-100">
            <div>
                <Appbar />
                <Navbar />
            </div>
            <div className="flex-grow-1 overflow-auto">
                <ProductList />
            </div>
        </div>
    );
}

export default App
