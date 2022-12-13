"use client"
import React, { useState } from 'react'
import {motion} from "framer-motion"
// import '../../styles/DarkModeSwitch.scss'
import { BsMoonFill, BsSunFill } from "react-icons/bs"

interface Props {
  theme: string | null
	isMobile?: boolean
}

const DarkModeSwitch: React.FC<Props> = ({ theme, isMobile = false }: Props) => {
	const [rotation, setRotation] = useState(-180)
	// const handleSwitch = () => {}
	return (
		<div
			className='relative -top-3'
			// className={`${isMobile ? 'relative' : 'relative -top-3'}`}
			onClick={() => setRotation(rotation + 180)}
		>
			<motion.div
				className='relative'
				initial={{
					// opacity: 1,
					scale: 1,
				}}
				animate={{
					// opacity: theme === 'dark' ? 1 : 0,
					scale: theme === 'dark' ? 1 : 0,
					rotate: rotation,
					transition: {
						// type: 'easeOut',
						// duration: 2,
						rotate: {
							duration: 0.7,
							ease: 'easeInOut',
						},
						scale: {
							duration: 0.7,
							// delay: 0.5,
							ease: 'easeInOut',
						},
					},
				}}
				// whileHover={{
				// 	scale: theme === 'dark' ? 1.1 : 0,
				// 	// boxShadow: "0px 0px 8px rgba(255, 255, 255)"
				// }}
			>
				<BsSunFill
					className='dark:hover:filter dark:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
					// className='relative transition-opacity duration-1000 ease-in-out theme.rotate-180'
					fill='#f8f765'
					size={50}
					// size={`${isMobile ? '24' : '50'}`}
				/>
			</motion.div>
			<motion.div
				className='absolute left-2 top-1'
				// className={`${isMobile ? 'absolute' : 'absolute left-2 top-1'}`}
				initial={{
					opacity: 0,
					scale: 0,
					rotate: -180,
				}}
				animate={{
					opacity: theme === 'dark' ? 0 : 1,
					scale: theme === 'dark' ? 0 : 1,
					rotate: rotation,
					// scale: 1,
					transition: {
						// type: 'easeOut',
						// duration: 2,
						opacity: {
							duration: 0.7,
							ease: 'easeOut',
						},
						rotate: {
							duration: 0.7,
							ease: 'easeInOut',
						},
						scale: {
							duration: 0.7,
							ease: 'easeInOut',
						},
					},
				}}
				// whileHover={{
				// 	scale: theme === 'dark' ? 0 : 1.1,
				// 	// boxShadow: "0px 0px 8px rgba(0, 0, 0)"
				// }}
			>
				<BsMoonFill
					className='filter drop-shadow-[-1px_3px_1px_rgba(0,0,0,0.3)] hover:drop-shadow-[-2px_6px_3px_rgba(0,0,0,0.3)]'
					// className='absolute top-0 left-0 transition duration-1000 ease-in-out theme.rotate-90'
					fill='#2C3E50'
					size={38}
					// size={`${isMobile ? '22' : '38'}`}
				/>
			</motion.div>
		</div>
	)
}

export default DarkModeSwitch
