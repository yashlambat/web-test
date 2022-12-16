import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';



export const Nav = styled.nav`
background-color: MediumSeaGreen;
opacity: 0.9;
height: 40px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;

/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
/* font-family: 'Water Brush', cursive; */
/* font-family: 'Poppins', sans-serif; */
font-family: 'demofont';
font-display: swap;
/* font-family: 'Roboto', sans-serif;
font-weight: 900;
font-display: swap; */

color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: auto;
cursor: pointer;
&.active {
	color: #000000;
	
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 480px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.9rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -34px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 34px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
/* font-family: 'Roboto', sans-serif; */
/* font-weight: 900;
font-display: swap; */
/* font-family: 'Water Brush', cursive; */
font-family: 'demofont';
font-style:normal;
font-display: swap;
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
