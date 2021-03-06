import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../App.css';

function Header() {
	return (
		<div>
			<header>
				<Navbar bg='dark' variant='dark' expand='sm'>
					<Navbar.Brand href='#home' className='headings'>
						Jon Bascos
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<Nav.Link href='#home'>Home</Nav.Link>
							<Nav.Link href='#Portfolio'>Portfolio</Nav.Link>
							<Nav.Link href='#About'>About</Nav.Link>
							<Nav.Link href='#Contact'>Contact Me</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</header>
		</div>
	);
}
export default Header;
