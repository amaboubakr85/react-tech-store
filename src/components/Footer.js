import React from "react";
import { ProductConsumer } from "../context/Context";
import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <ProductConsumer>
        {(value) => {
          const { SocialData } = value;

          return (
            <FooterWrapper>
              <div className="container py-3">
                <div className="row">
                  <div className="col-md-6">
                    <p className="text-capitalize">
                      copyrights &copy Tech Store {new Date().getFullYear()}
                      All rights Reserved.
                    </p>
                  </div>
                  <div className="col-md-6  d-flex justify-content-around">
                    {SocialData.map((item) => {
                      return (
                        <a href={item.url} key={item.id}>
                          {item.icon}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </FooterWrapper>
          );
        }}
      </ProductConsumer>
    </>
  );
}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  height: 100%;
  width: 100%;
  display: flex;
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
