import React from "react";
import { ProductConsumer } from "../context/Context";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function sidebar() {
  return (
    <>
      <ProductConsumer>
        {(value) => {
          // console.log(value);
          const { linksData, sideBarOpen, handleSideBar } = value;

          return (
            <SideBarWrapper show={sideBarOpen}>
              <ul className="side-menu">
                {linksData.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.link}
                      onClick={handleSideBar}
                      className="sidebar-link"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </SideBarWrapper>
          );
        }}
      </ProductConsumer>
    </>
  );
}

const SideBarWrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 60px;
  left: 0;
  background-color: var(--mainGrey);
  z-index: 1;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${(props) =>
    props.show ? "translateX(0)" : "translateX(-100%);"};
  .side-menu {
    list-style: none;
    padding: 0;
  }
  .sidebar-link {
    display: block;
    text-transform: capitalize;
    font-size: 1.5rem;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
    :hover {
      background: var(--primaryColor);
      text-decoration: none;
      /* padding: 0.5rem 2.5rem; */
      padding: 0.5rem 1.5rem 0.5rem 2.5rem;
      color: var(--mainWhite);
    }
  }

  @media (min-width: 576px) {
    width: 20rem;
  }
`;
