import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => { //props come from shop
    const {img, name, seller, price, stock, key} = props.product;
    // console.log(props.product);
    return (
        <div className='product'>
            <div className="image">
                <img src={img} alt=""/>
            </div>
            <div className="details">
                <h4><Link to={'/product/'+key}>{name}</Link></h4>
                <br/>
                <p>
                    <small>by: {seller}</small>
                </p>
                <p>price: ${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                { props.showAddToCart && <button 
                    className="main-button" 
                    onClick={()=>props.eventListener(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} /> 
                    add to cart
                </button>}
            </div>
        </div>
    );
};

export default Product;