import React from 'react';

import ProjectCard from './ProjectCard';

function Portfolio(props) {
	return (
		<div>
			<h1 className='headings'>
				Portfolio
			</h1>
			<br />
			<ul className='card-container'>
				<ProjectCard />
			</ul> 
		</div>
	);
}

export default Portfolio;
