import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';





const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to='/SpeedTest' >
						Speed Check
					</NavLink>
					<NavLink to='/Speedmeter'>
						 Speedmeter
					</NavLink>
					{/* <NavLink to='/annual' onClick={gaEvents.eventsofannual()} activestyle>
						Annual Report
					</NavLink>
					<NavLink to='/team' onClick={gaEvents.eventsofteam()} activestyle>
						Teams
					</NavLink> */}

					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink to='/signin' >Sign In</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;


