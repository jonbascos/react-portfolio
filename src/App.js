import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';

function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<Portfolio />
		</div>
	);
}

export default App;
