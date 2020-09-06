import React from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import fakeData from '../../assets/data/fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams(); //this productKey come from app.js as url perameter
    const product = fakeData.find(pd => pd.key === productKey);
    return (
        <div>
            <h4>Your Product Detail:</h4>
            <Product showAddToCart={false} product={product} />
        </div>
    );
};

export default ProductDetails;