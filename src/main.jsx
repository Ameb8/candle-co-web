import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductProvider} from "./contexts/ProductContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { CartUIProvider } from "./contexts/CartUIContext.jsx";
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ProductProvider>
          <CartProvider>
              <CartUIProvider>
                  <App />
              </CartUIProvider>
          </CartProvider>
      </ProductProvider>
  </StrictMode>,
)
