import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const {cart}=props;
    
    let price;
    let shipping;
    let total=0;
    for(const product of cart){
           price=product.price
           shipping=product.shipping;
           total=total+price+shipping;
    }
    return (
        <div>
            <h2 className='ordersummary'>CART{element}</h2>
            <h4 className='itemsordered'>Items ordered: {cart.length} </h4>
            <h5 className='itemsordered'>Price: {price}</h5>
            <h5 className='itemsordered'>Shipping Cost: {shipping}</h5>
            <h5 className='itemsordered'>Total : {total}</h5>
        </div>
    );
};

export default Cart;