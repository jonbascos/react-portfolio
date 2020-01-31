const portfolioList = [
	{
		id: 1,
		title: "Nomad's Pal",
		img:
			'https://medictodev-portfolio.s3-us-west-2.amazonaws.com/nomads-pal.png',
		description:
			"Nomad's Pal is a crowd sourced app that helps Digital Nomad's and remote workers locate a cafe or coworking space in the area they are interested in working. Developoment is still in progress but is currently able to add and search for locations in the Portland Oregon area.",
		liveUrl: 'http://www.nomadspal.com',
		githubUrl: 'https://github.com/jonbascos/nomads_pal',
		tech: 'HTML, CSS, Materialize, Django'
	},

	{
		id: 2,
		title: 'React Weather App',
		img:
			'https://medictodev-portfolio.s3-us-west-2.amazonaws.com/react-weather-app.jpg',
		description:
			'A weather app created using React and utilized the Open Weather API. You are able to enter a city and a country to display the current temperature and minimum/maximum temperature in fahrenheit as well as sky conditions.',
		liveUrl: 'https://jonbascos.github.io/react-weather-app/',
		githubUrl: 'https://github.com/jonbascos/react-weather-app',
		tech: 'React, CSS, Bootstrap, API consumption'
	},

	{
		id: 3,
		title: 'Meme Generator',
		img:
			'https://medictodev-portfolio.s3-us-west-2.amazonaws.com/meme-generator.png',
		description:
			'A meme-generator that takes in 2 inputs for the text of the meme.  This app also allows you to choose the color of the text.  One of the challenging parts of this project was getting the API containing the images integrating with the app.',
		liveUrl: 'http://medictodev-meme-generator.herokuapp.com',
		githubUrl: 'https://github.com/jonbascos/meme-generator',
		tech: 'React, CSS, Bootstrap, API consumption'
	},

	{
		id: 4,
		title: 'Git-Er-Done Todo List',
		img:
			'https://medictodev-portfolio.s3-us-west-2.amazonaws.com/todolist.jpg',
		description:
			'Your standard todo list app built with React and utilizing React Hooks for setting state.  One of the challenges I had with this project was the input field not being cleared after entering a new item.  With persistence, I was able to solve the issue which was being caused by one little word in the code.',
		liveUrl: 'http://medictodev-git-er-done.herokuapp.com',
		githubUrl: 'https://github.com/jonbascos/git-er-done',
		tech: 'React, CSS, React Bootstrap'
	}
];

export default portfolioList;
