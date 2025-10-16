import React from 'react'

const PageNotFound = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{height:"80vh"}}>
        <h3 className='mb-4'>404 Page Not Found</h3>
        <p>We couldn’t find the page you were looking for.</p>
        <p style={{marginTop:"-10px"}}>Visit<a href="/"> Zerodha’s home page</a></p>

    </div>
  )
}

export default PageNotFound