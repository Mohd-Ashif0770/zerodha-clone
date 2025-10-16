import React from "react";

const Stats = () => {
  return (
    <section className="container my-5 py-5">
      <div className="row align-items-center gy-5">
        {/* Left Text Section */}
        <div className="col-12 col-md-6">
          <h3 className="fw-semibold mb-4">Trust with confidence</h3>

          <div className="mb-5">
            <h5 className="fw-semibold">Customer-first always</h5>
            <p className="text-muted mt-2">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
              of equity investments, making us India’s largest broker
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-5">
            <h5 className="fw-semibold">No spam or gimmicks</h5>
            <p className="mt-2 text-muted">
              No gimmicks, spam, “gamification”, or annoying push notifications.
              High-quality apps that you use at your pace, the way you like.{" "}
              <a href="#" className="text-decoration-none fw-semibold">
                Our philosophies
              </a>
              .
            </p>
          </div>

          <div className="mb-5">
            <h5 className="fw-semibold">The Zerodha universe</h5>
            <p className="mt-2 text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="mb-5">
            <h5 className="fw-semibold">Do better with money</h5>
            <p className="mt-2 text-muted">
              With initiatives like{" "}
              <a href="#" className="text-decoration-none fw-semibold">
                Nudge
              </a>{" "}
              and{" "}
              <a href="#" className="text-decoration-none fw-semibold">
                Kill Switch
              </a>
              , we don't just facilitate transactions, but actively help you do
              better with your money.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid rounded"
          
          />

          <div className="d-flex flex flex-md-row justify-content-center justify-content-md-start align-items-center gap-4 mt-4 fw-medium">
            <a
              href="#"
              className="text-decoration-none text-primary d-flex align-items-center gap-2"
            >
              Explore Our Products
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              href="#"
              className="text-decoration-none text-primary d-flex align-items-center gap-2"
            >
              Try Kite Demo
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
