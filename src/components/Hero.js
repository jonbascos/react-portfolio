import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import headshot from '../static/img/headshot.jpg';

function Hero() {
	function sendEmail() {
		var email = 'jon@jonbascos.com';
		window.location = 'mailto:' + email;
	}
	return (
		<div>
			<Jumbotron>
				<div className='hero-container'>
					<img
						className='profile-picture'
						src={headshot}
						alt='Headshot of Jon Bascos'
					/>
					<div className='intro'>
						<h1>Hello!</h1>
						My Name is Jon and I'm a full stack web developer!
						<div className='contactButton'>
							<Button
								className='contact-button'
								variant='dark'
								onClick={sendEmail}
							>
								Contact Me
							</Button>
						</div>
					</div>
				</div>
			</Jumbotron>
		</div>
	);
}
export default Hero;
