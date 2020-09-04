import React from 'react';
import './Shop.css';
import fakeData from '../../assets/data/fakeData/index';
import { useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(pd=><Product product={pd} />)
                    }
                </div>
                <div className="cart-container">
                    this is cart
                </div>
            </div>
        </div>
    );
};

export default Shop;