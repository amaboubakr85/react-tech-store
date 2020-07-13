import React from "react";
import CartSection from "../components/CartPage";
import Hero from "../components/Hero";
import cartBG from "../images/storeBcg.jpeg";

export default function CartPage() {
    return (
        <React.Fragment>
            <Hero img={cartBG}></Hero>
            <CartSection></CartSection>
        </React.Fragment>
    );
}
