import React from "react";

const Team = () => {
  return (
    <section className="container my-5 py-5">
      <div className="row align-items-center gy-5 px-3 px-md-5">
        {/* Image Section */}
        <div className="col-12 col-md-4 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="team"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxWidth: "280px" }}
          />
          <div className="mt-3">
            <h5 className="fw-semibold">Nithin Kamath</h5>
            <p className="text-muted mb-1">Founder & CEO</p>
          </div>
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-8 text-center text-md-start">
          <h3 className="mb-4 fw-semibold">People</h3>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has transformed the landscape of the Indian broking
            industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="#" className="text-decoration-none text-primary">
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none text-primary">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none text-primary">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
