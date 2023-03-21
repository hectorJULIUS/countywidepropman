import React, { useState } from 'react'
import './css/reglog.css';
import { Button, Card, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import axios from 'axios';

function Register() {
  const [Username,setUsername]= useState('Hector');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`${Username}  ${email}  ${password}`);
        try {
          axios.post('http://localhost:8000/api/v1/signup', {username: Username, email: email, password: password});
      } catch (error) {
          console.log(error);
      }

  };

  
  return (
    <Box  className='box'
    component="form"
    onSubmit={handleSubmit}
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div className='login'>
      <Card>
        <CardContent>
      
       <h1>Register Now</h1>
    

       <TextField 
          required
          id="outlined-required"
          label ="Username"
          value={Username} onChange={e => setUsername(e.target.value)} type="text"
          defaultValue="Username"
        /> <br/>
        <br/>

        <TextField
          required
          id="outlined-required"
          label ="Email"
          value={email}onChange={e => setEmail(e.target.value)} type="text"
          defaultValue="Email"
        />
        <br/>
        <br/>
      
        
      <TextField
          id="outlined-password-input"
          label="Password"
          value={password} onChange={e => setPassword(e.target.value)} type="password"
          autoComplete="current-password"
        />
        <br/> <br/>
      <Button variant="outlined" type='submit'>SignUp </Button>
      </CardContent>
      </Card>
    </div>
    </Box>
  )
}

export default Register


