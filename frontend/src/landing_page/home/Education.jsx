import React from "react";

const Education = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col px-3 mt-5 me-5">
          <img
            src="media/images/education.svg"
            alt="Education image"
            style={{ height: "90%" }}
          />
        </div>
        <div className="col p-5 mt-5 ">
          <h3>Free and open market education</h3>
          <div className="my-4">
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a>
              Varsity <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div>
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a>
              TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
