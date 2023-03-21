import React from 'react'
import Header from './componets/Navbar/Header.js'
import './css/Header.css';
import ImageSection from './ImageSection';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import About from './About';
import Services from './Services';
import ContactUs from './ContactUs';



function Home() {
  return (
    
    <div className='MAIN'>
      <container>
      
      <ImageSection/>
      <About/>
    
      <ContactUs/>

      </container>
      
      



    </div>
  )
}

export default Home