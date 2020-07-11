import React, { Component } from "react";
import { ProductConsumer } from "../../context/Context";
import Title from "../Title";
import Product from "../Product";
import { Link } from "react-router-dom";

export default class Featured extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="container">
          {/* title */}
          <Title title="featured products" center="true"></Title>

          {/* products */}
          <div className="row my-5">
            <ProductConsumer>
              {(value) => {
                const { featuredProducts } = value;
                return (
                  <React.Fragment>
                    {featuredProducts.map((product) => {
                      return (
                        <Product key={product.id} product={product}></Product>
                      );
                    })}
                  </React.Fragment>
                );
              }}
            </ProductConsumer>
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <Link to="/products" className="main-link">
                our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
