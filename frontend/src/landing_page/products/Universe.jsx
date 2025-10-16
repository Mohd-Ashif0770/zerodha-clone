import React from "react";
import "./Universe.css";
const Universe = () => {
  return (
    <div className="container">
      <div className="text-center mt-2 py-4">
        <p className="fs-5 ">
          Want to know more about our technology stack? Check out the{" "}
          <a href="#">Zerodha.tech </a> blog.
        </p>
      </div>
      <div className="text-center my-3 py-5">
        <h3 className="mb-4">The Zerodha Universe</h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 text-center mb-3 py-5 px-5">
        <div className="col">
          <div className="mb-5">
            <img
              src="media/images/zerodhaFundhouse.png"
              alt=""
              style={{ height: "3rem" }}
            />
            <p className="text-muted mt-3  universe-para">
              Our asset management venture <br /> that is creating simple and
              transparent index <br /> funds to help you save for your goals.
            </p>
          </div>
          <div >
            <img
              src="media/images/streakLogo.png"
              alt=""
              className="mt-4"
              style={{ height: "3rem" }}
            />
            <p className="text-muted mt-3  universe-para">
              Systematic trading platform <br /> that allows you to create and
              backtest <br />
              strategies without coding.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="mb-5">
            <img
              src="media/images/sensibullLogo.svg"
              alt=""
              style={{ height: "3rem" }}
            />
            <p className="text-muted mt-3 fs-sm universe-para">
              Options trading platform that lets you <br /> create strategies,
              analyze positions, and examine <br /> data points like open
              interest, FII/DII, and more.
            </p>
          </div>
          <div >
            <img
              src="media/images/smallcaseLogo.png"
              alt=""
              className="mt-4"
              style={{ height: "3rem" }}
            />
            <p className="text-muted mt-3 fs-sm universe-para">
              Thematic investing platform <br /> that helps you invest in
              diversified <br />
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="mb-5">
            <img
              src="media/images/tijori.svg"
              alt=""
              style={{ height: "3rem" }}
            />
            <p className="text-muted mt-3 fs-sm universe-para">
              Investment research platform <br /> that offers detailed insights
              on stocks,
              <br />
              sectors, supply chains, and more.
            </p>
          </div>
          <div>
            <img
              src="media/images/dittoLogo.png"
              alt=""
              className="mt-4"
              style={{ height: "3rem" }}
            />
            <p className="text-muted mt-3 fs-sm universe-para">
              Personalized advice on life <br /> and health insurance. No spam <br /> and no mis-selling
              
            </p>
          </div>
        </div>
      </div>
      <div className="text-center my-5 py-4">
        <button className="btn btn-primary py-2 px-4 fs-5 ">Sign up for free</button>
      </div>
    </div>
  );
};

export default Universe;
