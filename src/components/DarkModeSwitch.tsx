import React, { useState, useContext } from 'react'
import {motion} from "framer-motion"
import { BsMoonFill, BsSunFill } from "react-icons/bs"
import { AppContext } from '../context/AppContext'

const DarkModeSwitch: React.FC = () => {
	const [rotation, setRotation] = useState(-180)
	const { theme } = useContext(AppContext)

	return (
		<div
			className='relative -top-3'
			onClick={() => {
				setRotation(rotation + 180)
			}}
		>
			<motion.div
				className='relative'
				initial={{
					scale: theme === 'dark' ? 1 : 0,
				}}
				animate={{
					scale: theme === 'dark' ? 1 : 0,
					rotate: rotation,
					transition: {
						delay: theme === 'dark' ? 0.5 : 0,
						rotate: {
							duration: 0.5,
							ease: 'easeIn',
						},
						scale: {
							duration: 0.5,
							ease: 'easeIn',
						},
					},
				}}
			>
				<BsSunFill
					className='dark:hover:filter dark:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
					fill='#f8f765'
					size={50}
				/>
			</motion.div>
			<motion.div
				className='absolute left-2 top-1'
				initial={{
					scale: theme === 'dark' ? 0 : 1,
					rotate: theme === 'dark' ? -180 : 0,
				}}
				animate={{
					scale: theme === 'dark' ? 0 : 1,
					rotate: rotation,
					transition: {
						delay: theme === 'dark' ? 0 : 0.5,
						rotate: {
							duration: 0.5,
							ease: 'easeInOut',
						},
						scale: {
							duration: 0.5,
							ease: 'easeInOut',
						},
					},
				}}
			>
				<BsMoonFill
					className='filter drop-shadow-[-1px_3px_1px_rgba(0,0,0,0.3)] hover:drop-shadow-[-2px_6px_3px_rgba(0,0,0,0.3)]'
					fill='#2C3E50'
					size={38}
				/>
			</motion.div>
		</div>
	)
}

export default DarkModeSwitch
