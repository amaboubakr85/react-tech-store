import React from "react";
import AboutBG from "../images/aboutBcg.jpeg";
import Hero from "../components/Hero";
import Info from "../components/AboutPage/Info";

export default function AboutPage() {
  return (
    <React.Fragment>
      <Hero img={AboutBG}></Hero>
      <Info></Info>
    </React.Fragment>
  );
}
