import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import defaultBG from "../images/defaultBcg.jpeg";

export default function Default() {
  return (
    <>
      <Hero title="404 !" img={defaultBG} max="true">
        <h2 className="text-uppercase">page not found</h2>
        <Link to="/" className="main-link" style={{ marginTop: "2rem" }}>
          back to home
        </Link>
      </Hero>
    </>
  );
}
