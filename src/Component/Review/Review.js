import React from 'react';
import './Review.css';
import { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../assets/utilities/databaseManager';
import fakeData from '../../assets/data/fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import greting from '../../assets/images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const handleRemoveProduct = (productKey)=>{
        const newCart = cart.filter(pd=>pd.key !== productKey); //remove selected product from cart
        setCart(newCart);
        removeFromDatabaseCart(productKey); //remove product from database
    };
    const placeOrderBtn = ()=>{
        setCart([]);
        setOrderPlaced(true);
        processOrder(cart);
    }
    useEffect(()=>{
        //cart items
       const savedCart = getDatabaseCart(); // get all product from local storage
       const productKeys = Object.keys(savedCart); //get all key from database or cart
       const cartProducts = productKeys.map(key => {
           const product = fakeData.find(pd=> pd.key === key); //get product from database by key
           product.quantity = savedCart[key]; //set product quantity from cart
           return product;
       });
       setCart(cartProducts);
    },[]);
    return (
        <div className='twin-container'>
            <div className='product-container'>
                {
                    cart.map(pd=><ReviewItem
                                    eventHandler={handleRemoveProduct}
                                    key={pd.key} 
                                    product={pd} 
                                />)
                }
                {
                    orderPlaced && <img src={greting} />
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={placeOrderBtn} className='main-button'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;