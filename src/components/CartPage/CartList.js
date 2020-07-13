import React from "react";
import CartItem from "./CartItem";
import {ProductConsumer} from "../../context/Context";


export default function CartList() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <ProductConsumer>
                        {
                            value => {
                                const {cart, increment, decrement, removeItem} = value;
                                if (cart.length === 0) {
                                    return <h1 className="text-center text-capitalize text-title my-4">your cart is
                                        currently empty </h1>
                                }
                                return <React.Fragment>
                                    {
                                        cart.map((item) => {
                                            return <CartItem key={item.id} cartItem={item} increment={increment}
                                                             decrement={decrement} removeItem={removeItem}/>
                                        })
                                    }
                                </React.Fragment>
                            }
                        }
                    </ProductConsumer>
                </div>
            </div>

        </div>
    );
}
