import React from 'react'
import Button  from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card , CardContent } from '@mui/material';
import './css/reglog.css';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import cont from './images/cont.png';

function ContactUs() {
  return (
    <div>
      <Box  className='cont-box'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        
      }}
      noValidate
      autoComplete="off"
    >
      <div className='container'>
        <div className='img'>
        <img className='img' src={cont}/>
        </div>
        <div className='card'>
        <h1>ContactUs</h1>
      <Card className='cont-card'>
      
      <CardContent>
      <TextField
          required
          id="outlined-required"
          label ="Name"
          value type="text"
          defaultValue="Name"
        /> <br/>
        <br/>

        <TextField
          required
          id="outlined-required"
          label ="Email"
          value type="text"
          defaultValue="Email"
        />
        <br/>
        <br/>

      <TextField id="standard-basic" label="Message" variant="standard" />
      <br/>
      <br/>
      <Button  variant="contained"type='submit' >Send</Button> 

      </CardContent>
      </Card>
      </div>


      </div>
    </Box>
    </div>
  
   
  )
}

export default ContactUs