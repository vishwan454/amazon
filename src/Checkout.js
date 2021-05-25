import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


function Checkout() {
    const [{basket}] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad"src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/images/A20M_blue_OG._CB1543638133_.png" alt="" />
            {
                basket.length===0? (
                    <div>
                        <h2>Your Shopping Basket is Empty </h2>
                        <p>You have no items in your basket.To buy one you need to click "ADD_TO_BASKET" next to the item</p>
                    </div>
                ):(
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>

                        {/* list out all the product  */}
                        {
                            basket?.map(item =>(
                                <CheckoutProduct
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price ={item.price}
                                rating = {item.rating}
                                />
                            ))
                        }
                    </div>
                )
            }
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <h1>subtotal</h1>
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
