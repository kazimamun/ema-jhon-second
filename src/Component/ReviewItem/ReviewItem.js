import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    return (
        <div style={{marginLeft:'200px'}} className='product'>
            <h4 className='product-name'>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>Price: ${price}</small></p>
            <br/>
            <button onClick={()=>props.eventHandler(key)} className='main-button'>Remove</button>
        </div>
    );
};

export default ReviewItem;