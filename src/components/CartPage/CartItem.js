import React from "react";
import {FaTrash, FaChevronCircleUp, FaChevronCircleDown} from "react-icons/fa"

export default function CartItem({removeItem, increment, decrement, cartItem}) {
    console.log(cartItem)
    const {title, price, count, id, total, image} = cartItem;
    return <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">

        {/* image */}
        <div className="col-10 mx-auto col-lg-2 pb-2">
            <img src={image} alt="product" width="60" className="img-fluid"/>
        </div>

        {/* title */}
        <div className="col-10 mx-auto col-lg-2 pb-2">
            <span className="d-lg-none ">product : </span>{title}
        </div>

        {/* price */}
        <div className="col-10 mx-auto col-lg-2 pb-2">
            <span className="d-lg-none ">price : $</span>{price}
        </div>


        {/*  count controls */}
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <div className="d-flex justify-content-center">
                <div>
                    <FaChevronCircleDown className="text-primary cart-icon"
                                         onClick={() => decrement(id)}></FaChevronCircleDown>
                    <span className="text-title text-muted mx-3">{count}</span>
                    <FaChevronCircleUp className="text-primary cart-icon"
                                       onClick={() => increment(id)}></FaChevronCircleUp>
                </div>
            </div>
        </div>

        {/* price */}
        <div className="col-10 mx-auto col-lg-2 ">
            <FaTrash className="text-danger cart-icon" onClick={() => removeItem(id)}></FaTrash>
        </div>

        {/* title */}
        <div className="col-10 mx-auto col-lg-2 ">
            <strong className="text-muted ">Item Total : ${total}</strong>
        </div>

    </div>;
}
