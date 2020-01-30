import React from 'react';
import Button from 'react-bootstrap/Button';

import list from '../portfolioList';

function Card(props) {
	const card = list.map(item => {
		return (
			<li className='portfolio-card' key={item.id}>
				<h3>{item.title}</h3>
				<img
					className='portfolio-images'
					src={item.img}
					alt={item.title}
				/>
				<p>{item.description}</p>
				<p>Tech used: {item.tech}</p>
				<p>
					<a
						href={item.liveUrl}
						target='_blank'
						rel='noopener noreferrer'
					>
						<Button>Live Version</Button>
					</a>
					<a
						href={item.githubUrl}
						target='_blank'
						rel='noopener noreferrer'
					>
						<Button>GitHub Repo</Button>
					</a>
				</p>
			</li>
		);
	});
	return (
		<div>
			<ul>{card}</ul>
		</div>
	);
}
export default Card;
