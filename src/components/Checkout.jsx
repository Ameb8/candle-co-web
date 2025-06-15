import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useCart } from '../contexts/CartContext';

export default function Checkout() {
    const stripe = useStripe();
    const elements = useElements();

    const [email, setEmail] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const { cart, clearCart } = useCart();
    const url = `${import.meta.env.VITE_API_URL}/order/create-order/`;

    const handleSubmit = async (e) => {
        if (cart.length === 0) { // Ensure cart is not empty
            alert("Your cart is empty. Add items before checking out.");
            return;
        }

        e.preventDefault();
        setIsProcessing(true);

        // Convert cart to Stripe's expected format
        const items = cart.map(item => ({
            product_id: item.id,
            quantity: item.quantity,
        }));

        try { // Send order info to server
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, items }),
            });

            if (!res.ok) // Order creation failure
                throw new Error("Server error during order creation");

            // Await response
            const { clientSecret, orderCode } = await res.json();

            // Confirm payment
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: { email },
                },
            });

            if (result.error) {
                alert(result.error.message);
            } else if (result.paymentIntent.status === "succeeded") {
                alert("Payment successful! Your order code is: " + orderCode);
                clearCart(); // Clear cart after success
            }
        } catch (err) {
            alert(err.message);
        }

        setIsProcessing(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
            />
            <CardElement />
            <button type="submit" disabled={!stripe || isProcessing}>
                {isProcessing ? "Processing..." : "Pay Now"}
            </button>
        </form>
    );
}
