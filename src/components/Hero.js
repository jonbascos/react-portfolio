import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import headshot from '../static/img/headshot.jpg';

function Hero() {
	function sendEmail() {
		// window.location.assign('mailto:jon@jonbascos.com');
		var email = 'jon@jonbascos.com';
		window.open = 'mailto:' + email;
	}
	return (
		<div>
			<Jumbotron fluid>
				<div className='hero-container'>
					<img
						className='profile-picture'
						src={headshot}
						alt='Headshot of Jon Bascos'
					/>
					<div className='intro'>
						<h1>Hello!</h1>
						My Name is Jon and I'm a full stack web developer!
					</div>
					<Button variant='dark' onClick={sendEmail}>
						Contact Me
					</Button>
				</div>
			</Jumbotron>
		</div>
	);
}
export default Hero;
