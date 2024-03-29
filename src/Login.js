import React from 'react';
import {useState} from 'react';
import './css/reglog.css';
import { useNavigate } from 'react-router-dom';
import Button  from '@mui/material/Button';
import { Card, CardContent, TextField , Link} from '@mui/material';
import { Box } from '@mui/system';
import {Link as RouterLink} from "react-router-dom";
import axios from 'axios';


function Login(props) {
  const  navigate = useNavigate();
  const [Username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleLogin = async e =>{
      e.preventDefault();
        console.log(Username);
        try {
         const response = await axios.post('http://localhost:8000/api/v1/login', { username: Username, password: password });
         const { token } = response.data;
         localStorage.setItem('authToken', token);
         console.log(token);
          navigate('/dashboard');
          props.loginStatus.setIsLoggedIn(true);
          console.log(props.loginStatus.isLoggedIn)
        } catch (error) {
          console.log(error);
        }
  }
  return (
    <Box className='box'
    component="form"
    onSubmit={handleLogin}
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >

      <div className='login' >
        <Card>
      {/* {console.log(props.loginStatus)} */}
    
      <h1>Login</h1>
      <CardContent>

      <TextField
          required
          id="outlined-required"
          label ="Username"
          value={Username} onChange={e => setUsername(e.target.value)} type="text"
        /> <br/>
        <br/>
      
        
      <TextField
          id="outlined-password-input"
          label="Password"
          value={password} onChange={e => setPassword(e.target.value)} type="password"
          autoComplete="current-password"
        /> <br/>
        <br/>

      <Button  variant="contained"type='submit' >Login</Button> 
      <br/>
      
      <h5>Forgot Password?  <Link component= { RouterLink} to="#">Click Here!</Link> </h5>
     

      </CardContent>
    
    
      </Card>
    </div>
  </Box>
  
  );
};

export default Login