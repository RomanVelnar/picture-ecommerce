import React, { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import {Context} from "../Context"

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const {cartItems, emptyCart} = useContext(Context);
    const totalCost = 5.99 * cartItems.length;
    const totalCostDisplay = totalCost.toLocaleString("en-GB", {style: "currency", currency: "GBP"})

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("order placed")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }
    
    return(
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                <button onClick={placeOrder}>{buttonText}</button>
            </div>
        </main>
    )
}

export default Cart