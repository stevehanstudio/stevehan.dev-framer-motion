import React, { useContext } from 'react'
import { motion } from 'framer-motion'
// import { InView } from 'react-intersection-observer'
import LogoGlow from '../components/LogoGlow'
// import Image from 'next/image'
import { socialMenuItems } from '../constants/MenuItems'
// import { icons } from 'react-icons'
import { AppContext } from '../context/AppContext'
import AnimatePageTransition from '../components/AnimatePageTransition'

const Home = () => {
	// const { theme, isMobile, selectedNavMenuItem, setSelectedNavMenuItem } =
	const { theme, isMobile, mobileMenuBottom } = useContext(AppContext)

	// const handleInView = (inView: boolean) => {
	// 	if (inView === true && selectedNavMenuItem !== 0) {
	// 			setSelectedNavMenuItem(0)
	// 	}
	// }

	return (
		<AnimatePageTransition>
			<div
				id='home'
				className={`max-w-5xl mx-auto section ${
					isMobile && mobileMenuBottom ? 'mt-0 pt-3' : ''
				}`}
			>
				<div className='logo-image'>
					<motion.img
						animate={{
							y: 0,
							opacity: 1,
							filter: 'blur(0px)',
							transition: {
								type: 'anticipate',
								duration: 2.2,
							},
						}}
						initial={{
							// y: -100,
							opacity: 0,
							filter: 'blur(10px)',
						}}
						// className='logo-image'
						alt='stevehan-logo-emblem'
						src='https://res.cloudinary.com/dbrvquuei/image/upload/c_scale,w_auto/f_auto/dpr_auto/v1670922600/stevehandev/images/stevehandev_mmunmr.png'
						// src='/stevehandev.png'
						height={`${isMobile ? 175 : 250}`}
						width={`${isMobile ? 175 : 250}`}
					/>
					{theme === 'dark' && <LogoGlow />}
				</div>
				<motion.div
					animate={{
						y: 0,
						opacity: 1,
						filter: 'blur(0px)',
						transition: {
							type: 'anticipate',
							duration: 2.6,
							staggerChildren: 1,
						},
					}}
					initial={{
						y: 400,
						opacity: 0,
						filter: 'blur(30px)',
					}}
				>
					<h1 className='text-4xl font-light tracking-tighter text-center text-healthcareBlue md:text-7xl'>
						STEVE HAN
					</h1>
					<motion.h3
						initial={{
							opacity: 0,
							translateY: 400,
						}}
						animate={{
							opacity: 1,
							translateY: 0,
						}}
						transition={{
							type: 'easeInOut',
							duration: 2,
							delay: 0.5,
						}}
						className='text-base font-semibold tracking-wider text-center text-gray-500 sm:tracking-widest md:text-xl dark:text-gray-400'
					>
						Full Stack Software Engineer
					</motion.h3>
					<motion.p
						initial={{
							opacity: 0,
							translateY: 350,
						}}
						animate={{
							opacity: 1,
							translateY: 0,
						}}
						transition={{
							type: 'easeInOut',
							duration: 2.25,
							delay: 1,
						}}
						className='text-sm font-semibold text-center dark:text-gray-200'
					>
						Typescript | React | Javascript | Node.js | AWS
					</motion.p>
					<motion.p
						initial={{
							opacity: 0,
							translateY: 300,
						}}
						animate={{
							opacity: 1,
							translateY: 0,
						}}
						transition={{
							type: 'easeInOut',
							duration: 2.5,
							delay: 1.5,
						}}
						className='text-center text-gray-800 text-md sm:text-lg m-7 dark:text-gray-200'
					>
						Hi, welcome to my portfolio website. I am a full stack
						software engineer competent on the web stack with a focus on
						typescript, react, and cloud computing on AWS. I am dedicated,
						a team player with an attention to details.
					</motion.p>
				</motion.div>
				{isMobile && (
					<ul className='flex flex-row h-auto pt-5 place-content-center'>
						{socialMenuItems.map(item => (
							<li key={item.title} className='mobile-hero-social-link'>
								<a
									href={item.url}
									target='_blank'
									rel='noopener noreferrer'
									aria-label={item.title}
								>
									<item.icon
										size={item.iconSize}
										className={item.iconClass}
									/>
								</a>
							</li>
						))}
					</ul>
				)}
			</div>
		</AnimatePageTransition>
	)
}

export default Home
