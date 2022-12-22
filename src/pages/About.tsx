import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
// import { InView } from 'react-intersection-observer'
import AnimatePageTransition from '../components/AnimatePageTransition'

const About = () => {

	const { isMobile, mobileMenuBottom } = useContext(AppContext)

	// const handleInView = (inView: boolean) => {
	// 	if (inView === true && selectedNavMenuItem !== 3) {
	// 		setSelectedNavMenuItem(3)
	// 	}
	// }

	return (
		<AnimatePageTransition>
			<div
				id='about'
				className={`section max-w-5xl mx-auto ${
					isMobile && mobileMenuBottom ? 'm-5 p-0' : ''
				}`}
			>
				<h2 className='section-title'>About</h2>
				<div className='flex flex-col mx-0 md:mx-7 md:flex-row'>
					<img
						className='object-cover w-full h-auto md:pt-6 md:w-[484px] basis-1'
						src='https://res.cloudinary.com/dbrvquuei/image/upload/c_scale,w_auto/f_auto/dpr_auto/v1669594147/stevehandev/images/_DSC8502_2_ukhnwo.jpg'
						alt='portrait of me'
						loading='lazy'
					/>
					<div className='w-full h-auto px-6 pt-1 md-pt-0 md:px-7 md:w-1/2'>
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
				<h4 className='px-6 pt-0 md:px-7'>About this website</h4>
				<p className='px-6 pb-8 mb-8 md:px-7'>
					When I built my first website in 2002, it was to track my journey
					and progress as a photographer and document where I've been. Now,
					that my focus in software development, I built this website with
					a similar goal in mind in showing the skills I picked up along
					the way.
				</p>
			</div>
		</AnimatePageTransition>
	)
}

export default About
