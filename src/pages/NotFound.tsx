import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'

function NotFound() {
	const { theme, isMobile } = useContext(AppContext)

  return (
		<div className='relative section max-w-3xl w-3xl mx-auto justify-center items-center'>
			<h1 className='section-title'>Page not found</h1>
			<div className='absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
				{/* <div className='flex flex-col w-full h-full text-center items-center justify-center'> */}
				<motion.svg
					// viewBox='0 0 500 500'
					width='100%'
					height='100%'
					className={`${
						theme === 'dark'
					 ? 'stroke-orange-400' : 'stroke-orange-600'}`}
				>
					{/* <g>
						<rect
							x='0.5'
							y='0.5'
							width='500'
							height='500'
							stroke='#53565b'
							stroke-width='1'
							fill='transparent'
						/>
https://framer.com/m/framer/Animator.js
						<path
							d='M25.1344086,9.40860215 L25.1344086,40.7258065'
							stroke='#53565B'
							stroke-width='1'
							stroke-linecap='square'
						/> */}

					<motion.text
						initial={{ strokeDashoffset: 500 }}
						animate={{ strokeDashoffset: 0 }}
						transition={{
							ease: 'easeOut',
							duration: 5,
							repeat: Infinity,
							repeatDelay: 1,
						}}
						font-size={`${isMobile ? '9em' : '13em'}`}
						x='50%'
						y='50%'
						dy='0.07em'
						dominantBaseline='middle'
						// dominantBaseline='central'
						fontFamily='Work Sans, Helvetica, sans-serif'
						textAnchor='middle'
						strokeWidth={3}
						strokeDasharray='500 50'
						// stroke='#ff0000'
						strokeLinecap='round'
						fill='transparent'
						// fill='#e0e5ed'
						strokeLinejoin='round'
					>
						404
					</motion.text>
					{/* </g> */}
				</motion.svg>
				<h3 className='pt-[4em] w-full text-xl font-medium text-orange-600 md:text-3xl dark:text-orange-400'>
					Sorry, error code 404 encountered. The page you requested is not
					found.
				</h3>
			</div>
		</div>
  )
}

export default NotFound