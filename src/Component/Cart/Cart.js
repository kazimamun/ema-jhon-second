import React from 'react';
import './Cart.css';

const Cart = (props) => { // props come from shop
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    const tax = totalPrice / 10;
    let shipping = 12.99;
    if(totalPrice>35 || totalPrice === 0){
        shipping = 0;
    } else if( totalPrice>15){
        shipping = 4.99;
    }
    function fixed(amount){
       return amount.toFixed(2);
    }
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Total Price: {fixed(totalPrice)}</p>
            <p><small>Shipping Cost: {fixed(shipping)}</small></p>
            <p><small>Tax + Vat: {fixed(tax)}</small></p>
            <p>Total Price: {fixed(totalPrice + shipping + tax)}</p>
        </div>
    );
};

export default Cart;