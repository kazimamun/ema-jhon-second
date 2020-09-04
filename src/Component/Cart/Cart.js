import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    const tax = (totalPrice / 10).toFixed(2);
    let shipping = 12.99;
    if(totalPrice>35 || totalPrice == 0){
        shipping = 0;
    } else if( totalPrice>15){
        shipping = 4.99;
    }
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Total Price: {totalPrice}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + Vat: {tax}</small></p>
            <p>Total Price: {totalPrice + shipping + tax}</p>
        </div>
    );
};

export default Cart;