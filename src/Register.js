import React, { useState } from 'react'
import './css/reglog.css';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';

function Register() {
  const [Username,setUsername]= useState('Hector');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const signUp = e =>{
    e.preventDefault();
    console.log("You clicked Me");
  }
  return (
    <Box  className='box'
    component="form"
    onSubmit={signUp}
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div className='login'>
      
       <h1>Register Now</h1>
    

       <TextField 
          required
          id="outlined-required"
          label ="Username"
          value={Username} onChange={e => setUsername(e.target.value)} type="text"
          defaultValue="Username"
        /> <br/>

        <TextField
          required
          id="outlined-required"
          label ="Email"
          value={email}onChange={e => setEmail(e.target.value)} type="text"
          defaultValue="Email"
        />
        <br/>
      
        
      <TextField
          id="outlined-password-input"
          label="Password"
          value={password} onChange={e => setPassword(e.target.value)} type="password"
          autoComplete="current-password"
        />
        <br/>
      <Button variant="outlined" type='submit'>SignUp </Button>
    
    </div>
    </Box>
  )
}

export default Register


