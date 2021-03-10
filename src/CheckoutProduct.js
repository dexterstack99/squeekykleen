import React from 'react';
import './CheckoutProduct.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
            id: id,
            },
        })
    }

    return (
        <div className="checkout_product">
            <img
            className="checkout_product_image"
            src={image}
            alt="checkout"
            />

            <div className="checkout_product_info">
                <p className="checkout_product_title">{title}</p>
                <p className="checkout_product_price">
                    <small>R</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout_product_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <span><StarBorderIcon /></span>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
