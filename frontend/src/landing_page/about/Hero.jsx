import React from "react";
import "./AboutPage.css";

const Hero = () => {
  return (
    <section className="container my-5 py-5">
      {/* Top Heading */}
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-10">
          <h4 className="my-5 px-3 fw-semibold">
            We pioneered the discount broking model in India. <br />
            Now, we are breaking ground with our technology.
          </h4>
        </div>
      </div>

      {/* Content Section */}
      <div className="row border-top border-bottom mt-4 mx-auto py-5 px-3 px-md-5 gy-5">
        {/* Left Column */}
        <div className="col-12 col-md-6 text-dark text-start">
          <p className="mb-4">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="my-4">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 text-dark text-start">
          <p className="mb-4">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="my-4">
            <a href="#" className="text-decoration-none text-primary fw-medium">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="#" className="text-decoration-none text-primary fw-medium">
              blog
            </a>{" "}
            or see what the media is{" "}
            <a href="#" className="text-decoration-none text-primary fw-medium">
              saying about us
            </a>{" "}
            or learn more about our business and product{" "}
            <a href="#" className="text-decoration-none text-primary fw-medium">
              philosophies
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
