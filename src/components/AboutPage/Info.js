import React from "react";
import Title from "../Title";
import AboutBg from "../../images/aboutBcg.jpeg";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 my-3 mx-auto">
            <img
              src={AboutBg}
              alt="about company"
              className="img-fluid img-thumbnail"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 col-md-6 my-3 mx-auto">
            <Title title="about us"></Title>
            <p className="text-lead text-muted my-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              corporis soluta excepturi non quo. Saepe aspernatur quas doloribus
              sint est!
            </p>
            <p className="text-lead text-muted my-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              corporis soluta excepturi non quo. Saepe aspernatur quas doloribus
              sint est!
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
