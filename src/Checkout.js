import React from 'react'
import Subtotal from "./Subtotal";
import CheckoutProduct from './CheckoutProduct';
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import userEvent from '@testing-library/user-event';

function Checkout() {
    const [{ basket,user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_add" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="add" />
                <div>
                    <h4>{user?.email}</h4>
                    <h2 className="checkout_title">Your Shopping Basket</h2>

                    {/*Checkout products*/}
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />))}


                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
