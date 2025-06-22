import { useLocation } from 'react-router-dom';

export default function OrderSuccess() {
    const location = useLocation();
    const { orderCode } = location.state || {};

    return (
        <div className="container my-5 text-center">
            <h2>Thank you for your order!</h2>
            <p>Your payment was successful.</p>
            {orderCode && <p><strong>Order Code:</strong> {orderCode}</p>}
        </div>
    );
}
