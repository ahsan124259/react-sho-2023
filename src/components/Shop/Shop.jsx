import React, { useEffect, useState } from 'react';
import './shop.css'
import Product from '../Product/Product';
import Cart from '../../Cart/Cart';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setcart]=useState([]);
    useEffect(()=>{
        fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const addToCart=(product)=>{
        // 
        const newCart=[...cart,product]
        setcart(newCart)

    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                
                {
                    products.map(product=><Product 
                    product={product}
                    addToCart={addToCart}
                    
                    ></Product>)
                }
            </div>
            <div className="order-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;