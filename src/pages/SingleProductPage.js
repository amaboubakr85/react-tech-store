import React from "react";
import {ProductConsumer} from "../context/Context";
import {Link} from "react-router-dom";
import singleProductBG from "../images/singleProductBcg.jpeg";
import Hero from "../components/Hero";


export default function SingleProductPage() {
    return (
        <React.Fragment>
            <Hero img={singleProductBG} title="Single Product"></Hero>
            <ProductConsumer>
                {
                    value => {
                        const {singleProduct, addToCart, loading} = value;
                        console.log(singleProduct)
                        if (loading) {
                            console.log("hello from loading")
                            return <h1>loading</h1>
                        }
                        const {company, description, id, price, title, image} = singleProduct;
                        return (
                            <section className="py-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-10 col-md-6 col-sm-8 col-lg-6 mx-auto my-3">
                                            <img src={`../${image}`} alt="product" className="img-fluid"/>
                                        </div>
                                        <div className="col-10 col-md-6 col-sm-8 col-lg-6 mx-auto my-3">
                                            <h5 className="text-title mb-4">model : {title}</h5>
                                            <h5 className="text-capitalize mb-4 text-muted">company : ${company}</h5>
                                            <h5 className="text-main text-capitalize">price : ${price}</h5>
                                            <p className="text-capitalize text-title mt-3">info :</p>
                                            <p>{description}</p>
                                            <button onClick={() => addToCart(id)} type="button" className="main-link"
                                                    style={{margin: "0.75rem"}}>Add to cart
                                            </button>
                                            <Link to={`/products`} className="main-link" style={{margin: "0.75rem"}}>back
                                                to products
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        )
                    }
                }
            </ProductConsumer>
        </React.Fragment>
    );
}
