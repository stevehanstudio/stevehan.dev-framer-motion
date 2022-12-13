import React from 'react'
import { motion } from 'framer-motion'

const LogoGlow = () => {
  return (
		<>
			<motion.div
				className='absolute z-[-1] top-0 left-0 dark:bg-white opacity-75 rounded-full max-w-1/2 max-h-1/2 w-[250px] h-[250px] dark:blur-sm'
				animate={{
					scale: [0.9, 0.95, 1.05, 1],
					opacity: 1,
				}}
				transition={{
					type: 'anticipate',
					delay: 1,
					duration: 9,
					times: [0, 0.2, 0.6, 1],
				}}
				initial={{
					opacity: 0,
				}}
			/>
			<motion.div
				className='absolute z-[-2] top-0 left-0 dark:bg-[#FF00FF] opacity-75 rounded-full max-w-1/2 max-h-1/2 w-[250px] h-[250px] dark:blur-md'
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
						delay: 1,
						duration: 9,
						times: [0, 0.2, 0.6, 1],
					},
				}}
				initial={{
					opacity: 0,
				}}
			/>
			<motion.div
				className='absolute z-[-3] top-0 left-0 dark:bg-[#00FFFF] opacity-100 rounded-full max-w-1/2 max-h-1/2 w-[250px] h-[250px] dark:blur-lg'
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
						delay: 1,
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