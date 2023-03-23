import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,} from './NavbarElements';
import Typography from '@mui/material/Typography';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import {Link} from 'react-router-dom';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>

        <Typography className='logo'>
        <Link className='list' to="/"><h2> <AssuredWorkloadIcon/>  CountyWide <br/>
         Property Management</h2></Link>
        
        </Typography>
        <NavLink to='/' activeStyle>
			Home
		</NavLink>

		<NavLink to='/About' activeStyle>
			About
		</NavLink>
		<NavLink to='/Services' activeStyle>
			Services
		</NavLink>

		<NavBtn>
		<NavBtnLink to='/Register'>SignUp</NavBtnLink>
		</NavBtn>
		
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/Login'>LogIn</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
