import React from 'react'
import "./Brokerage.css"

const Brokerage = () => {
  return (
    <div className='container my-5 py-5'>
      <h4 className='my-4'>Charges for account opening</h4>
      <table className=" table table-striped border">
  <thead >
    <tr >
      <th  scope="col">Type of account</th>
      <th scope="col">Charges</th>      
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td >Online account</td>
      <td >Free</td>
    </tr>
    <tr>     
      <td >Offline account</td>
      <td  >Free</td>      
    </tr>
    <tr>     
      <td  >NRI account (offline only)</td>
      <td >₹ 500</td>      
    </tr>
    <tr>     
      <td >Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
      <td >₹ 500</td>      
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Brokerage