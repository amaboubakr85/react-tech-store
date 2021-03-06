import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { ProductConsumer } from "../context/Context";

export default function Product({ product }) {
  //console.log(product);

  return (
    <ProductConsumer>
      {(value) => {
        const { addToCart, setSingleProduct } = value;
        return (
          <ProductWrapper className="mx-auto col-10 col-sm-8 col-md-6 col-lg-4 my-3">
            <div className="card">
              <div className="img-container">
                <img
                  src={product.image}
                  alt=" product"
                  className="card-img-top p-5"
                  style={{ height: "320px" }}
                />
                <div className="product-icon">
                  <Link to={`/products/${product.id}`}>
                    <FaSearch
                      className="icon"
                      onClick={() => setSingleProduct(product.id)}
                    ></FaSearch>
                  </Link>
                  <Link >
                    <FaCartPlus
                      className="icon"
                      onClick={() => addToCart(product.id)}
                    ></FaCartPlus>
                  </Link>
                </div>
              </div>
              <div className="card-body d-flex justify-content-between">
                <p className="mb-0">{product.title}</p>
                <p className="mb-0 text-main">$ {product.price}</p>
              </div>
            </div>
          </ProductWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const ProductWrapper = styled.div`
  .card {
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
    :hover {
      -webkit-box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
      box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }
    .card-img-top {
      transition: var(--mainTransition);
      :hover {
        transform: scale(1.15);
        opacity: 0.2;
      }
    }
    .img-container {
      position: relative;

      .product-icon {
        transition: var(--mainTransition);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;

        .icon {
          font-size: 2.5rem;
          padding: 0.5rem;
          margin: 1rem;
          color: var(--primaryColor);
          background: var(--mainBlack);
          border-radius: 0.5rem;
        }
      }
    }

    .card-body {
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }
  .card:hover .product-icon {
    opacity: 1;
  }
`;
