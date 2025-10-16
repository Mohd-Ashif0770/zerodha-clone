import React from 'react'

const ChargesForOptional = () => {
  return (
    <div className='container my-5 py-5'>
         <h4 className="my-4">Charges for optional value added services</h4>

      <table className=" table table-striped border">
        <thead>
          <tr>
            <th scope="col">Service</th>
            <th scope="col">Billing Frquency</th>
            <th scope="col">Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tickertape</td>
            <td>Monthly / Annual</td>
            <td>Free: 0 | Pro: 249/2399</td>
          </tr>
          <tr>
            <td>Smallcase</td>
            <td>Per transaction</td>
            <td>Buy & Invest More: 100 | SIP: 10</td>
          </tr>
          <tr>
            <td>Kite Connect</td>
            <td>Monthly</td>
            <td>Connect: 500 | Personal: Free</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ChargesForOptional