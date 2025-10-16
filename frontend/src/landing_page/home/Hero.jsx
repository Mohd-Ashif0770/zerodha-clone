import React from 'react'

const Hero = () => {
  return (
    <div className='container px-4 py-20 text-center mb-5'>
      <div className="row justify-content-center align-items-center px-5">
        <img src="media/images/homeHero.png" alt="Home Hero" className=' p-5'/>
        <div className='my-5'>
        <h2 className='mb-3'>Invest in everything</h2>
        <p style={{fontSize:"20px"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='btn btn-primary p-2 fs-5 mt-4' style={{width:"200px"}}>Sign up for free</button>
        </div>
      </div>

    </div>
  )
}

export default Hero