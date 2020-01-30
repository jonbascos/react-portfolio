import React from 'react';

import Card from './Card';

function Portfolio(props) {
	return (
		<div>
			<h1 className='headings'>Portfolio</h1>
			<br />
			<ul className='card-container'>
				<Card />
			</ul>
		</div>
	);
}

export default Portfolio;
