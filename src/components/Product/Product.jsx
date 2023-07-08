import React from 'react';
import './product.css';



const Product = (props) => {
  const {product,addToCart}=props;
    const {name,price,seller,ratings,img}=product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
        <div>
        <p>Name:{name}</p>
           <p>price:{price}</p>
           <p><small>seller:{seller}</small></p>
           <p><small>rating:{ratings}</small></p>
        </div>
        <button onClick={()=>addToCart(product)} className='btn-add'>
            <p>AddToCard </p>
        </button>
        </div>
    );
};

export default Product;