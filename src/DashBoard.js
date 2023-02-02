import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Button, Container } from '@mui/material';
import Switch from '@mui/material/Switch';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const label = { inputProps: { } };


function DashBoard(props) {
  const navigate = useNavigate();
  const logOut = e => {
    e.preventDefault();
    navigate('/Login')
    props.logoutStatus.setIsLoggedOut(true);
  }
  return (
    <div>
      
      <form onSubmit={logOut} >
      <h1>Welcome To Your Dashboard</h1> 
      <Container>
      <AppBar position='static' >
        <toolbar >
        
          <Typography sx={{mx:5}} variant="h8"  > <Link className='list' to="/Table">Post</Link></Typography>
          <Typography sx={{mx:5}} variant="h8"  > <Link className='list' to="#">Calls</Link></Typography>
          <Typography sx={{mx:5}} variant="h8"  > <Link className='list' to="#">Reviews</Link></Typography>
          <Typography sx={{mx:5}} variant="h8"  ><Link className='list' to="#">Offers</Link></Typography>
          <Typography sx={{mx:5}} variant="h8"  ></Typography>
          <Typography sx={{mx:5}} variant="h8" placement="right-start"> <Button size="small"  color="secondary" variant="outlined"  type='submit' >logOut</Button></Typography>
          
        </toolbar>
      </AppBar>
      </Container>
      
           
            
            
    </form>

    </div>
  )
}

export default DashBoard