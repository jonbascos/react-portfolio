import React from 'react';
import Card from 'react-bootstrap/Card';

import list from '../portfolioList';
import { Nav } from 'react-bootstrap';

function ProjectCard(props) {
	const card = list.map(item => {
		return (
			<li className='portfolio-card' key={item.id}>
				<Card
					className='individual-cards'
					bg='light'
					text='black'
					style={{ width: '20rem' }}
				>
					<Card.Header>
						<Nav variant='tabs' defaultActiveKey='#first'>
							<Nav.Item>
								<Nav.Link className='links' href='#first'>
									Info
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									className='links'
									href={item.liveUrl}
									target='_blank'
								>
									Live
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									className='links'
									href={item.githubUrl}
									target='_blank'
								>
									GitHub
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Card.Header>
					<Card.Img
						variant='top'
						src={item.img}
						alt={item.title}
						className='portfolio-images'
					/>
					<Card.Body>
						<Card.Title className='headings'>
							{item.title}
						</Card.Title>
					</Card.Body>
					<Card.Text>
						<p>{item.description}</p>
						<p>Tech used: {item.tech}</p>
					</Card.Text>
				</Card>
			</li>
		);
	});
	return <div className='card-container'>{card}</div>;
}
export default ProjectCard;
