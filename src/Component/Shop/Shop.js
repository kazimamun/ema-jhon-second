import React, { useEffect } from 'react';
import './Shop.css';
import { Link } from 'react-router-dom';
import fakeData from '../../assets/data/fakeData/index';
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDatabaseCart, getDatabaseCart} from '../../assets/utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products] = useState(first10);
    const [cart, setCart] = useState([]);

    //show product to cart from database
    useEffect(() =>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey =>{
            const product = fakeData.find(pd=>pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    },[])

    //add product to local storage
    const handleAddProduct = (product)=>{
        const sameProduct = cart.find(pd=> pd.key === product.key); //find product at database by orderd product key
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count; // if sameproduct orderd again then add new orderd quantity with previous quantity
            const others = cart.filter(pd=> pd.key !== product.key); // other product set with previous quantity
            newCart = [...others, sameProduct];
        }else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    return (
        <div>
            <div className="twin-container">
                <div className="product-container">
                    {
                        products.map(pd=><Product 
                                            showAddToCart={true}
                                            key={pd.key} 
                                            product={pd} 
                                            eventListener={handleAddProduct}
                                        />
                                    )
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to='/review'>
                            <button className='main-button'>Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;