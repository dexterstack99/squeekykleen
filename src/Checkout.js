import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img 
                className="checkout_ad" 
                src="https://m.media-amazon.com/images/S/abs-image-upload-na/e/AmazonStores/ATVPDKIKX0DER/c8ec65101ab33102becf255a85cb5e19.w3000.h600._CR0%2C0%2C3000%2C600_SX840_.jpg"
                alt=""
                />

                <div>
                    <h2 className="checkout_title">Your Shopping Carts</h2>
                   
                   {basket.map(item => (
                       <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                       />
                   ))}

                </div>
            </div>
            
            <div className="checkout_right">
                <Subtotal />
                
            </div>
        </div>
    )
}

export default Checkout;
