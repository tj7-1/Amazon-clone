import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';
import StarIcon from '@material-ui/icons/Star';

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    
    const removeFromBasket = () =>{
        //dispatch action into the datalayer
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }

    return (
        <div className="checkoutProduct">

            <img className="checkoutProduct_image" src={image}/>

            <div className="checkoutProduct_info">

                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                <small>₹</small>
                <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating).fill().map((_,i)=>(
                    <p><StarIcon/></p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from the basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
