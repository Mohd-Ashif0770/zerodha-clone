import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
      <div className='text-center  py-5 my-5'>
        <h3>Charges</h3>
        <p className='fs-5 text-muted'>List of all charges and taxes</p>
      </div>
      <div className='row text-center justify-content-around my-5 py-5'>
        <div className="col d-flex flex-column gap-3 justify-content-center align-items-center " style={{marginTop:"-20px"}}>
          <img src="media/images/pricing0.svg" alt="" style={{width:"17rem"}}/>
          <h3>Free equity delivery</h3>
          <small style={{fontSize:"0.95rem"}}>All equity delivery investments (NSE, BSE), <br /> are absolutely free — ₹ 0 brokerage.</small>
        </div>
        <div className="col d-flex flex-column gap-3 justify-content-center align-items-center ">
          <img src="media/images/intradayTrades.svg" alt="" style={{width:"17rem"}} className='mt-4' />
          <h3 className=''>Intraday and F&O trades</h3>
          <small style={{fontSize:"0.95rem"}}>Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on intraday trades across <br /> equity, currency, and commodity trades. Flat <br /> ₹20 on all option trades.</small>
        </div>
        <div className="col d-flex flex-column gap-3 justify-content-center align-items-center">
          <img src="media/images/pricing0.svg" alt="" style={{width:"17rem"}}/>
          <h3>Free direct MF</h3>
          <small style={{fontSize:"0.95rem"}}>All direct mutual fund investments are <br /> absolutely free — ₹ 0 commissions & DP <br /> charges.</small>
        </div>
        

      </div>
    </div>
  )
}

export default Hero