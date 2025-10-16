import React from "react";

const Pricing = () => {
  return (
    <section className="container my-5 py-5 px-4">
      <div className="row align-items-center gy-5">
        {/* Left Section */}
        <div className="col-12 col-md-5">
          <h3 className="fw-semibold mb-4">Unbeatable pricing</h3>
          <p className="text-muted mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            className="text-decoration-none text-primary fw-medium d-inline-flex align-items-center gap-2"
          >
            See Pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-7">
          <div className="row text-center g-4">
            <div className="col-12 col-md-6">
              <div className="border border-2 border-light-subtle rounded-3 p-4 h-100 shadow-sm">
                <h1 className="fw-bold text-success">₹0</h1>
                <p className="text-muted">
                  Free equity delivery and direct mutual funds
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="border border-2 border-light-subtle rounded-3 p-4 h-100 shadow-sm">
                <h1 className="fw-bold text-success">₹20</h1>
                <p className="text-muted">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
