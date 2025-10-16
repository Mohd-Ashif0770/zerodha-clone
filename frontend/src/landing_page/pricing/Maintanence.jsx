import React from "react";

const Maintanence = () => {
  return (
    <div className="container">
      <h4 className="my-4">Demat AMC (Annual Maintenance Charge)</h4>

      <table className=" table table-striped border">
        <thead>
          <tr>
            <th scope="col">Value of holdings</th>
            <th scope="col">AMC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Up to ₹4 lakh</td>
            <td>Free</td>
          </tr>
          <tr>
            <td>₹4 lakh - ₹10 lakh</td>
            <td>₹ 100 per year, charged quarterly*</td>
          </tr>
          <tr>
            <td>Above ₹10 lakh</td>
            <td>₹ 300 per year, charged quarterly</td>
          </tr>
        </tbody>
      </table>
      <small style={{fontSize:"0.67rem"}}>
        * Lower AMC is applicable only if the account qualifies as a Basic
        Services Demat Account (BSDA). BSDA account holders cannot hold more
        than one demat account. To learn more about BSDA,
      </small><br />
      <small><a href="#" className="">click here.</a></small>
    </div>
  );
};

export default Maintanence;
