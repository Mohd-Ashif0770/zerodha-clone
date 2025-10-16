import React from "react";

const Awards = () => {
  return (
    <section className="container my-5 py-5">
      <div className="row align-items-center gy-5">
        {/* Left Image Column */}
        <div className="col-12 col-md-5 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxHeight: "350px" }}
          />
        </div>

        {/* Right Content Column */}
        <div className="col-12 col-md-7 px-md-5 text-center text-md-start">
          <h3 className="fw-semibold mb-3">Largest Stock Broker in India</h3>
          <p className="text-muted">
            2+ million Zerodha clients contribute to 15% of all retail volume in
            India daily by trading and investing in various market instruments.
          </p>

          {/* Two-column feature lists */}
          <div className="row mt-4">
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mb-2">Futures and Options</li>
                <li className="mb-2">Commodity Derivatives</li>
                <li className="mb-2">Currency Derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mb-2">Stocks and IPOs</li>
                <li className="mb-2">Direct Mutual Funds</li>
                <li className="mb-2">Bonds & Govt. Securities</li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <div className="mt-4 text-center text-md-start">
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
