import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    
    
    const addToBasket = () => {
        //dispatch action into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,

            },
        });
    };
    return (
        <div className="product">
            
                <div className="product_info">
                    <p>{title}</p>
                    <p className="product_price">
                        <small>R</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product_rating">
                        
                        {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span><StarBorderIcon /></span>
                        ))}

                    </div>
                </div>

                    <img 
                    className="product-img"
                    src={image}
                    alt="product-img"
                    />

                    
                
                <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
