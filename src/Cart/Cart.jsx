import React from 'react';
import './cart.css';

const Cart = ({cart}) => {
   let total=0;
   let shipping=0;
   for(const product of cart){
     total=total+product.price ;
     shipping=shipping+product.shipping;
   }
   const tax=(total+shipping)*0.10.toFixed(2);
   const grandTotal=total+shipping+tax
 
    return (
        <div className='cart'>
            
            <p> Order Number:{cart.length} </p>
            <p>total:{total}</p>
            <p>Shipping:{shipping}</p>
            <p>Tax:{tax}</p>
            <p>GrandTotal:{grandTotal}</p>

        </div>
    );
};

export default Cart;