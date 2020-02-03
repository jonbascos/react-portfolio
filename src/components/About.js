import React from 'react';

function About(props) {
	return (
		<div>
			<section className='about-container'>
				<h1 className='headings'>About</h1>
                <div className='about-contents'>
                    <p>
                    I am a Web Developer born and raised in the Silicon Valley and moved to the Portland area in 2005. I enjoy learning about new tech especially when it comes to consumer electronics (I love my Apple products) and also mining crypto. I was first introduced to Web Development in high school. We learned about HTML and created web pages in class.</p>

                    <p>I'm a graduate of the PDX Code Guild 14-week Bootcamp. During the Bootcamp, we focused on being full stack Python-based web develoeprs. My current (and ever evolving knowledge) includes Python, Django, Django REST Framework, VueJS, HTML, CSS, and Javascript. I'm currently learning ReactJS to add to my toolbelt.
                    </p>
                </div>
			</section>
		</div>
	);
}
export default About;
