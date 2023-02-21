import React from 'react'
import './css/reglog.css';
import sev from './images/sev1.svg'

function Services() {
  return (
    <div className='sev'>
        <h1>
        Services
        </h1>

      <div><img alt='pre' className='image' src={sev}  /></div>
      <div></div>
    </div>
  )
}

export default Services