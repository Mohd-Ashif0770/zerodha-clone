import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-light border-top py-4 mt-5">
      <div className="container">
        {/* Top Row */}
        <div className="row gy-4">
          {/* Logo & Socials */}
          <div className="col-12 col-md-6 col-lg-3">
            <img
              src="media/images/logo.svg"
              alt="Brand logo"
              className="mb-3 img-fluid"
              style={{ width: "150px" }}
            />
            <small className="text-muted d-block mb-3">
              &copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </small>

            {/* Social Icons Row 1 */}
            <div className="d-flex flex-wrap gap-3 mt-3 border-bottom pb-3">
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>

            {/* Social Icons Row 2 */}
            <div className="d-flex flex-wrap gap-3 mt-3">
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>

          {/* Footer Link Columns */}
          <div className="col-6 col-md-3 col-lg-2 footer-links">
            <h6 className="mb-4 fw-semibold">Account</h6>
            <a href="">Open demat account</a><br />
            <a href="">Minor demat account</a><br />
            <a href="">NRI demat account</a><br />
            <a href="">Commodity</a><br />
            <a href="">Dematerialisation</a><br />
            <a href="">Fund transfer</a><br />
            <a href="">MTF</a><br />
            <a href="">Referral program</a>
          </div>

          <div className="col-6 col-md-3 col-lg-2 footer-links">
            <h6 className="mb-4 fw-semibold">Support</h6>
            <a href="">Contact us</a><br />
            <a href="">Support portal</a><br />
            <a href="">How to file a complaint?</a><br />
            <a href="">Status of your complaints</a><br />
            <a href="">Bulletin</a><br />
            <a href="">Circular</a><br />
            <a href="">Z-Connect blog</a><br />
            <a href="">Downloads</a>
          </div>

          <div className="col-6 col-md-3 col-lg-2 footer-links">
            <h6 className="mb-4 fw-semibold">Company</h6>
            <a href="">About</a><br />
            <a href="">Philosophy</a><br />
            <a href="">Press & media</a><br />
            <a href="">Careers</a><br />
            <a href="">Zerodha Cares (CSR)</a><br />
            <a href="">Zerodha.tech</a><br />
            <a href="">Open source</a>
          </div>

          <div className="col-6 col-md-3 col-lg-2 footer-links">
            <h6 className="mb-4 fw-semibold">Quick Links</h6>
            <a href="">Upcoming IPOs</a><br />
            <a href="">Brokerage charges</a><br />
            <a href="">Market holidays</a><br />
            <a href="">Economic calendar</a><br />
            <a href="">Calculators</a><br />
            <a href="">Markets</a><br />
            <a href="">Sectors</a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Legal / Info Paragraphs */}
        <div className="footer-para small text-muted" style={{ lineHeight: "1.6" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633. Depository services through Zerodha Broking Ltd.
            – SEBI Registration no.: IN-DP-431-2019. Commodity Trading through
            Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.:
            INZ000038238.
          </p>
          <p>
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            For any complaints, write to{" "}
            <a className="footer-anchor" href="mailto:complaints@zerodha.com">
              complaints@zerodha.com
            </a>{" "}
            or{" "}
            <a className="footer-anchor" href="mailto:dp@zerodha.com">
              dp@zerodha.com
            </a>
            .
          </p>
          <p>
            <a className="footer-anchor" href="#">
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </a>
          </p>
          <p>
            Investments in securities are subject to market risks; read all
            related documents carefully before investing.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4 footer-bottom-links">
          <a href="">NSE</a>
          <a href="">BSE</a>
          <a href="">MCX</a>
          <a href="">Terms & conditions</a>
          <a href="">Policies & procedures</a>
          <a href="">Privacy policy</a>
          <a href="">Disclosure</a>
          <a href="">For investor's attention</a>
          <a href="">Investor charter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
