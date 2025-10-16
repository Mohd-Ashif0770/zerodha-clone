import React from 'react'

const Hero = () => {
  return (
    <div className='container-fluid bg-light'>
      <div className=''>
        <div className=" d-flex justify-content-between py-4 px-5 " >          
            <h1 className=' ' style={{fontWeight:"600" , fontSize:"2.2rem", paddingLeft:"0.6rem"}}>Support Portal</h1>          
            <button className='btn btn-primary' style={{width:"110px", marginRight:"0.8rem"}}>My Ticket</button>         
        </div>
        <div className="row  pt-2 px-5 pb-5 mx-2">
          <input type="text" className='form-control p-3 ' placeholder='Eg: How do I can Open my account, How do i activate F&O...'/>

        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Hero