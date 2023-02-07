import React from 'react'
import Header from './Header'
import './css/Header.css';
import ImageSection from './ImageSection';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import About from './About';
import Services from './Services';



function Home() {
  return (
    
    <div className='MAIN'>
      <container>
      
      <ImageSection/>
      <About/>
      <Services/>

      </container>
      
      



    </div>
  )
}

export default Home