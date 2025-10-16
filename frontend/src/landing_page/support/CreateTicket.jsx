import React from "react";
import "./CreateTicket.css";

const CreateTicket = () => {
  return (
    <div className="container my-3 py-5">
      <h4 className="my-4">To create a ticket, select a relevant topic</h4>
      <div className="row my-4">
        <div className="col">
          <p className="my-4">
            <i className="fa-solid fa-circle-plus"></i> Account Opening
          </p>
          <a href="">Online Account Opening</a>
          <br />
          <a href="">Offline Account Opening</a>
          <br />
          <a href="">
            Company, partnership, and HUC account <br /> opening
          </a>
          <br />
          <a href="">NRI Account Opening</a>
          <br />
          <a href="">Charges at Zerodha</a>
          <br />
          <a href="">Zerodha IDFC FIRST Bank 3-in-1 Account</a>
          <br />
          <a href="">Getting Started</a>
          <br />
        </div>
        <div className="col">
          <p className="my-4">
            <i className="fa-solid fa-user"></i> Your Zerodha Account
          </p>
          <a href="">Login Credetials</a>
          <br />
          <a href="">Account Modification and Segment Addition</a>
          <br />
          <a href="">DP ID and bank details</a>
          <br />
          <a href="">Your Profile</a>
          <br />
          <a href="">Transfer and Conversion of shares</a>
          <br />
        </div>
        <div className="col ">
          <p className="my-4">
            <i className="fa-solid fa-chart-simple"></i> Your Zerodha Account
          </p>
          <a href="">Margin/leverage, Product and Order types</a>
          <br />
          <a href="">Kite web and Mobile</a>
          <br />
          <a href="">Tranding FAQs</a>
          <br />
          <a href="">Corporate Actions</a>
          <br />
          <a href="">Sentinel</a>
          <br />
          <a href="">Kite API</a>
          <br />
          <a href="">Pi and other Platform</a>
          <br />
          <a href="">Stockreports + </a>
          <br />
          <a href="">GTT</a>
          <br />
        </div>
      </div>
      <div className="row my-4">
        <div className="col">
          <p className="my-4">
            <i className="fa-regular fa-credit-card"></i> Funds
          </p>
          <a href="">Adding Funds</a>
          <br />
          <a href="">Funds Withdrawal</a>
          <br />
          <a href="">eMandates</a>
          <br />
          <a href="">NRI Account Opening</a>
          <br />
          <a href="">Adding Bank Accounts</a>
          <br />
        </div>
        <div className="col">
          <p className="my-4">
            <i className="fa-solid fa-circle-notch"></i> Console
          </p>
          <a href="">Reports</a>
          <br />
          <a href="">Ledger</a>
          <br />
          <a href="">Portfolio</a>
          <br />
          <a href="">60 Day Challenge</a>
          <br />
          <a href="">IPO</a>
          <br />
          <a href="">Referal Program</a>
          <br />
        </div>
        <div className="col ">
          <p className="my-4">
            <i className="fa-regular fa-circle"></i> Coin
          </p>
          <a href="">Understanding Mutual Funds</a>
          <br />
          <a href="">About Coin</a>
          <br />
          <a href="">Buying and Selling</a>
          <br />
          <a href="">Starting an SIP</a>
          <br />
          <a href="">Managing your Portfolio</a>
          <br />
          <a href="">Coin App</a>
          <br />
          <a href="">Moving to Coin</a>
          <br />
          <a href="">Goverment Securities</a>
          <br />
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
