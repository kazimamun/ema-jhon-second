import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    return (
        <div>
            <h3>{props.product.name}</h3>
        </div>
    );
};

export default Product;