
import {Link} from 'react-router-dom';
import './css/Header.css';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from 'bootstrap';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

function Header(){
    return(
        <div >

      <AppBar  position="static" className='top-nav'   sx={{ height:'100px' }} >
      <Toolbar  >
        
        <Typography className='logo'>
        <h2> <AssuredWorkloadIcon/>  CountyWide <br/>
         Property Management</h2>
        </Typography>

        <Typography className=' header'>
        <Typography sx={{mx:5 , alignItems:'center'}} variant="h8" ><Link className='list' to="/">Home</Link></Typography>
        <Typography sx={{mx:5}} variant="h8"><Link className='list' to="/About">About</Link></Typography>
        <Typography sx={{mx:5}} variant="h8"><Link className='list' to="/Services">Services</Link></Typography>
        <Typography sx={{mx:5}} variant="h8"><Link className='list' to="/ContactUs">ContactUs</Link></Typography>
        </Typography>

      <Typography>
      <Link className='nav' to="/Login"><LoginIcon/></Link>
      </Typography>
      

      <Typography>
      <Link className='nav' to="/Register"> < AppRegistrationIcon/> </Link>
      </Typography>
      
      </Toolbar>
      </AppBar>
        </div>
    );
};

export default Header;