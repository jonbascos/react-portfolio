import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills'

function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<Portfolio />
			<About />
			<Skills />
		</div>
	);
}

export default App;
