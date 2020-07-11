import React, { Component } from "react";
import { FaRedo, FaDollarSign, FaDolly } from "react-icons/fa";
import styled from "styled-components";

export default class Services extends Component {
  state = {
    Services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "Free Shipping",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, cum.",
      },
      {
        id: 2,
        icon: <FaRedo />,
        title: "30 days return policy",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, cum.",
      },
      {
        id: 3,
        icon: <FaDollarSign />,
        title: "secure payments",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, cum.",
      },
    ],
  };

  render() {
    return (
      <ServicesWrapper className="py-5">
        <div className="container">
          <div className="row">
            {this.state.Services.map((service) => {
              return (
                <div
                  className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
                  key={service.id}
                >
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-title mt-3 text-capitalize">
                    {service.title}
                  </div>
                  <div className="service-text mt-3">{service.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

const ServicesWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  .service-text {
    color: var(--darkGrey);
  }
  .service-title {
    font-weight: bold;
  }
`;
