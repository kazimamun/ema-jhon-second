import React from 'react';
import './Shop.css';
import fakeData from '../../assets/data/fakeData/index';
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(pd=><Product 
                                            key={pd.key} 
                                            product={pd} 
                                            eventListener={handleAddProduct}
                                        />
                                    )
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Shop;