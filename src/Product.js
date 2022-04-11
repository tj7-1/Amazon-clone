import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {     //props

    const [{basket},dispatch] = useStateValue();

    console.log("Inside of basket>>>",basket);    

    const addToBasket = () =>{
        //dispatch action into the datalayer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
                },
        })
    }

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>₹ </small><strong>{price}</strong>
                </p>
                <div className="product_rating">
                {Array(rating).fill().map((_,i)=>(
                    <p><StarIcon/></p>
                ))}
                </div>
            </div>
            <img src={image} alt="product1"/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
