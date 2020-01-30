import React from 'react';

import list from '../portfolioList';

function Card(props) {
	const card = list.map(item => {
		return (
			<li className='portfolio-card' key={item.id}>
				<h3>{item.title}</h3>
				<br />
				<img src={item.img} alt={item.title} />
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
