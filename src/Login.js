import React from 'react';
import {useState} from 'react';
import './css/reglog.css';
import { useNavigate } from 'react-router-dom';
import Button  from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

function LogIn(props) {
  const navigate = useNavigate();
  const [Username,setUsername]= useState('Hector');
  const [password, setPassword]= useState('');

  const login = e => {
    e.preventDefault();
    console.log(Username);
    props.loginStatus.setIsLoggedIn(true);
    navigate('/dashboard')
  }
  return (
    <Box className='box'
    component="form"
    onSubmit={login}
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
      <div className='login'>
      {/* {console.log(props.loginStatus)} */}
    
      <h1>Login</h1>

      <TextField
          required
          id="outlined-required"
          label ="Username"
          value={Username} onChange={e => setUsername(e.target.value)} type="text"
          defaultValue="Username"
        /> <br/>
      
        
      <TextField
          id="outlined-password-input"
          label="Password"
          value={password} onChange={e => setPassword(e.target.value)} type="password"
          autoComplete="current-password"
        /> <br/>

      <Button variant="contained"type='submit' >Login</Button> 
      <br/>
      
      <Link className='forget' to="#">forget Password</Link>
    
    
      
    </div>
  </Box>
  
  );
};

export default LogIn