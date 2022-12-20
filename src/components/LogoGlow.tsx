import React from 'react'
import { motion } from 'framer-motion'

const LogoGlow = () => {
  return (
		<>
			<motion.div
				className='z-[-1] dark:bg-white opacity-75 max-w-1/2 max-h-1/2 dark:blur-sm logo-image-glow'
				animate={{
					scale: [0.9, 0.95, 1.05, 1],
					opacity: 1,
				}}
				transition={{
					type: 'anticipate',
					delay: 0.15,
					duration: 9,
					times: [0, 0.2, 0.6, 1],
				}}
				initial={{
					opacity: 0,
				}}
			/>
			<motion.div
				className='z-[-2] dark:bg-[#FF00FF] opacity-75 max-w-1/2 max-h-1/2 logo-image-glow dark:blur-md'
				animate={{
					backgroundColor: [
						'rgb(255, 0, 255)',
						'rgba(255, 218, 3, 0.4)',
						'rgb(255, 218, 3, 0.4)',
						'rgb(255, 0, 255)',
					],
					scale: [1, 1, 1.4, 1],
					opacity: 1,
					transition: {
						type: 'anticipate',
						delay: 0.15,
						duration: 9,
						times: [0, 0.2, 0.6, 1],
					},
				}}
				initial={{
					opacity: 0,
				}}
			/>
			<motion.div
				className='z-[-3] dark:bg-[#00FFFF] opacity-100 max-w-1/2 max-h-1/2 logo-image-glow dark:blur-lg'
				animate={{
					backgroundColor: [
						'rgb(0, 255, 255)',
						'rgba(255, 191, 0, 0.4)',
						'rgba(255, 191, 0, 0.4)',
						'rgb(0, 255, 255)',
					],
					scale: [1, 1, 1.8, 1],
					opacity: 1,
					transition: {
						type: 'anticipate',
						delay: 0.15,
						duration: 9,
						times: [0, 0.2, 0.6, 1],
					},
				}}
				initial={{
					opacity: 0,
				}}
			/>
		</>
  )
}

export default LogoGlow