import { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';
import ProductBuy from './ProductBuy';

function ProductList() {
    const {products, loading} = useContext(ProductContext);
    const [selectedProduct, setSelectedProduct] = useState(null);

    if (loading) return <div className="text-center mt-5">Loading products...</div>;
    if (!products.length) return <div className="text-center mt-5">No products found.</div>;

    if (selectedProduct) {
        return <ProductBuy product={selectedProduct} onBack={() => setSelectedProduct(null)}/>;
    }

    if (selectedProduct) {
        return (
            <ProductBuy
                product={selectedProduct}
                onBack={() => setSelectedProduct(null)}
            />
        );
    }

    return (
        <div className="container-fluid mt-4 px-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {products.map(product => (
                    <div key={product.id} className="col">
                        <ProductCard
                            product={product}
                            onClick={() => setSelectedProduct(product)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
