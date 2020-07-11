import React from "react";
import Title from "../Title";
export default function Contact() {
  return (
    <section>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-6 mx-auto my-3">
              <Title title="contact us"></Title>
              <form
                className="mt-5"
                method="POST"
                action="https://formspree.io/mwkrrjdo"
              >
                {/* first name */}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    placeholder="jhon smith"
                    id="firstName"
                  />
                </div>
                {/* email */}
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="jhon@domain.com"
                    id="email"
                  />
                </div>
                {/* subject */}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="message subject"
                    id="subject"
                  />
                </div>
                {/* message */}
                <div className="form-group">
                  <textarea
                    type="textarea"
                    className="form-control"
                    name="message"
                    placeholder="message here .."
                    id="message"
                    rows="10"
                  />
                </div>
                {/* button */}
                <div className="form-group mt-3">
                  <input
                    type="submit"
                    value="send"
                    className="form-control btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
