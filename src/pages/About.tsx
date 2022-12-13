'use client'
import React from 'react'
// import { InView } from 'react-intersection-observer'
import PageWrapper from '../PageWrapper'

const About = () => {

	// const handleInView = (inView: boolean) => {
	// 	if (inView === true && selectedNavMenuItem !== 3) {
	// 		setSelectedNavMenuItem(3)
	// 	}
	// }

	return (
		<PageWrapper>
			<div className='max-w-5xl mx-auto section'>
				<h2 className='section-title'>About</h2>
				<div className='flex flex-col mx-1 md:mx-7 md:flex-row'>
					<img
						className='object-cover w-full h-auto md:pt-6 md:w-[484px] basis-1'
						src='https://res.cloudinary.com/dbrvquuei/image/upload/v1669594147/stevehandev/images/_DSC8502_2_ukhnwo.jpg'
						alt='portrait of me'
					/>
					<div className='w-full h-auto px-4 md:px-7 md:w-1/2'>
						<h4 className='text-xl dark:text-gray-200'>About Me</h4>
						<p className='pb-3'>
							With a bachelor's degree in Computer Engineering, out of
							college, I had pursued hardware engineering, because I had
							found hardware to be more challenging and enjoy challenges.
							In 2002, after 6 years of designing hardware and ASIC
							(Application Specific Integrated Circuit) chips, I decided
							to pursue my passion in photography, the electronic dance
							music scene, and traveling.
						</p>
						<p className='pb-3'>
							One of the first things I did when I made the decision was
							to create my first website to put my photographs on, which
							led to my managing a website that covers the electronic
							dance music scene nationwide.Having lived out my passion, I
							explored a number of options including fashion photography,
							video, sound engineering, and VR development. As a producer
							and sound engineer for a podcast on VR, Dopamine VR, I
							built a website using WordPress and decided after working
							in the web space for 2 decades, it only makes sense to turn
							my attention to web development.
						</p>
						<p className='pb-3'>
							I decided to focus on the frontend, then the backend, then
							cloud computing. I enrolled at CCSF where I received
							certificates in Web Application Programming, Securing Web
							Applications, and Javascript Specialist. Next, I enrolled
							in the Udacity React Nanodgree program to learn the
							intricacies of React.js. More recently, I studied for and
							passed the AWS Cloud Practitioner and AWS Developer
							Associates Certifications on the first try. I've strived
							for continuous learning and development and have taken
							countless online courses and my focus now is to put what
							I've learned to use. I am excited to take on my next
							challenge and look forward to connecting with you.
						</p>
					</div>
				</div>
				<br />
				<h4 className='px-4 pt-0 md:px-7'>About this website</h4>
				<p className='px-4 pb-8 mb-8 md:px-7'>
					When I built my first website in 2002, it was to track my journey
					and progress as a photographer and document where I've been. Now,
					that my focus in software development, I built this website with
					a similar goal in mind in showing the skills I picked up along
					the way.
				</p>
			</div>
		</PageWrapper>
	)
}

export default About
