import { Container } from '@mui/material'
import React from 'react'
import ImageSection from './ImageSection'
import './css/Header.css';
import rep from './images/rep.jpg';

function About() {
  return (
    <div className='MAIN' >
      <h1>About Us</h1>
     <div className='about'>
      
     <div className='divr'>
     <p>
     We used position: fixed for our nav bar because it will be displayed on top and if in case our web page goes longer than the complete view port (i.e the device screen), it will stick to the top so that we can view the change of active class even after that. margin: 0 auto; aligns the item horizontally on center. Other styles are transitions, colors and li tag styling. Those are very repeating things. display: inline-block; makes the list items to take minimal space.

      Similarly, if you take closer look, we also made a .active class. Did you notice we have not declared any active class in above code but we actually gave style to this class. What’s the point? we will use this shortly. For now be informed that we made this so we can add and manipulate this class with jQuery later. For now lets see what we made till now:


     </p>

     </div>
     <div className='divl'>

     <img className='img' src={rep}/>
      

     </div>
     </div>

     <div className='about'>

     <div className='divl'>
 
 <img className='img' src={rep}/>
  

 </div>
      
      <div className='divr'>
      <p>
      We used position: fixed for our nav bar because it will be displayed on top and if in case our web page goes longer than the complete view port (i.e the device screen), it will stick to the top so that we can view the change of active class even after that. margin: 0 auto; aligns the item horizontally on center. Other styles are transitions, colors and li tag styling. Those are very repeating things. display: inline-block; makes the list items to take minimal space.
 
       Similarly, if you take closer look, we also made a .active class. Did you notice we have not declared any active class in above code but we actually gave style to this class. What’s the point? we will use this shortly. For now be informed that we made this so we can add and manipulate this class with jQuery later. For now lets see what we made till now:
 
 
      </p>
 
      </div>
      
      </div>

      <div className='about'>
      
     <div className='divr'>
     <p>
     We used position: fixed for our nav bar because it will be displayed on top and if in case our web page goes longer than the complete view port (i.e the device screen), it will stick to the top so that we can view the change of active class even after that. margin: 0 auto; aligns the item horizontally on center. Other styles are transitions, colors and li tag styling. Those are very repeating things. display: inline-block; makes the list items to take minimal space.

      Similarly, if you take closer look, we also made a .active class. Did you notice we have not declared any active class in above code but we actually gave style to this class. What’s the point? we will use this shortly. For now be informed that we made this so we can add and manipulate this class with jQuery later. For now lets see what we made till now:


     </p>

     </div>
     <div className='divl'>

     <img className='img' src={rep}/>
      

     </div>
     </div>
     
    

    </div>
  )
}

export default About