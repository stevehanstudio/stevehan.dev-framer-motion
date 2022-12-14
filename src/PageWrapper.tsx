import React, { useContext, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { VscChevronDown } from 'react-icons/vsc'
import { AppContext } from './context/AppContext'

const PageWrapper = ({ children }: { children: ReactNode }) => {
	const { pathname } = useLocation()
	const { isMobile } = useContext(AppContext)
	// console.log('pathname', pathname)

	return (
		<motion.div
			key={pathname}
			onKeyDown={() => console.log('PageWrapper key press')}
			drag='y'
			onDragStart={(event, info) =>
				console.log('PageWrapper drag detected', event, info)
			}
			dragElastic={0.8}
			// dragMomentum={false}
			dragConstraints={{ top: 0, bottom: window.innerHeight }}
			initial={{
				x: isMobile ? '100vw' : 0,
				y: isMobile ? 0 : '100vh',
				opacity: 1,
			}}
			animate={{
				x: 0,
				y: 0,
				opacity: 1,
			}}
			exit={{
				x: isMobile ? '-100vw' : 0,
				y: isMobile ? 0 : '-100vh',
				opacity: 1,
			}}
			transition={{
				// y: {
				// delay: 1,
				// type: 'spring',
				// stiffness: 300,
				// damping: 30,
				ease: [0.43, 0.13, 0.23, 0.96],
				duration: isMobile ? 0.8 : 1.2,
				// },
			}}
		>
			{children}
			<motion.div
				className='w-full pt-4 flex justify-center'
				initial={{
					opacity: 0
				}}
				animate={{
					opacity: 1
				}}
				transition={{
					delay: 2.5,
					duration: 1.2
				}}
				exit={{
					opacity: 0,
					transition: {
						delay: 0,
						duration: 1
					}
				}}
			>
				<button
					className='text-white opacity-70 hover:opacity-100 transition-350'
					onClick={() => console.log('Go to next page')}
				>
					<VscChevronDown size={60} />
				</button>
			</motion.div>
		</motion.div>
	)
}

export default PageWrapper
