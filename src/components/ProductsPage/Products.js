import React from "react";
import { ProductConsumer } from "../../context/Context";
import Title from "../../components/Title";
import Product from "../Product";

export default function Products() {
  return (
    <ProductConsumer>
      {(value) => {
        const { filteredProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              <Title title="Our Products" center="true"></Title>
              <div className="row py-5">
                {filteredProducts.map((product) => {
                  return <Product key={product.id} product={product}></Product>;
                })}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
