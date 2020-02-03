import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faFilePdf} from '@fortawesome/free-solid-svg-icons'

import headshot from '../static/img/headshot.jpg';
import resume from '../resume.pdf'

function Hero() {
	function sendEmail() {
		var email = 'jon@jonbascos.com';
		window.location = 'mailto:' + email;
	}
	return (
		<div>
			<Jumbotron>
				<div className='hero-container'>
					<Image src={headshot} className='profile-picture' roundedCircle />
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
						<div>
							<ul className='social-media'>
								<li>
									<a href='https://www.twitter.com/medictodev' target='_blank' rel="noopener noreferrer">
									<FontAwesomeIcon icon={faTwitter} size='2x' style={{color: 'teal'}} /></a>
								</li>
								<li>
									<a href='https://www.linkedin.com/in/jonbascos' target='_blank' rel="noopener noreferrer">
									<FontAwesomeIcon icon={faLinkedin} size='2x' style={{color: 'teal'}} /></a>
								</li>

								<li>
									<a href='https://www.github.com/jonbascos' target='_blank' rel="noopener noreferrer">
									<FontAwesomeIcon icon={faGithub} size='2x' style={{color: 'teal'}} /></a>
								</li>
								<li>
									<a href={resume}target='_blank' rel="noopener noreferrer">
									<FontAwesomeIcon icon={faFilePdf} size='2x' style={{color: 'teal'}} /></a>
								</li>
							</ul>
							
						</div>
					</div>
				</div>
			</Jumbotron>
		</div>
	);
}
export default Hero;
