import React, { useContext, ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { VscChevronDown } from 'react-icons/vsc'
import { AppContext } from '../context/AppContext'
import { path } from '../constants/misc'

const AnimatePageTransition = ({ children }: { children: ReactNode }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isMobile, selectedNavMenuItem, setSelectedNavMenuItem, navDirection } = useContext(AppContext)
	// console.log(`pathname=${pathname}, navDirection=${navDirection}`)

	const handleGoToNextPage = () => {
		const nextMenuItem =
			selectedNavMenuItem === path.length - 1 ? 0 : selectedNavMenuItem + 1
		navigate(path[nextMenuItem])
		setSelectedNavMenuItem(nextMenuItem)
	}

	return (
		<motion.div
			key={pathname}
			onKeyDown={() => console.log('PageWrapper key press')}
			drag='y'
			onDragStart={(event, info) =>
				console.log('PageWrapper drag detected', event, info)
			}
			dragElastic={0.8}
			dragConstraints={{ top: 0, bottom: window.innerHeight }}
			initial={{
				x:
					isMobile && navDirection === 'right'
						? '-100vw'
						: isMobile && navDirection === 'left'
						? '100vw'
						: 0,
				y: isMobile ? 0 : '100vh',
			}}
			animate={{
				x: 0,
				y: 0,
			}}
			exit={{
				x:
					isMobile && navDirection === 'right'
						? '100vw'
						: isMobile && navDirection === 'left'
						? '-100vw'
						: 0,
				y: isMobile ? 0 : '-100%',
				transition: {
					ease: 'easeInOut',
					duration: isMobile ? 0.5 : 0.8,
				},
			}}
			transition={{
				delay: 0.5,
				ease: 'easeInOut',
				duration: isMobile ? 1 : 1.8,
			}}
		>
			{children}
			<motion.div
				className='flex justify-center w-full pt-4'
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					delay: 2.5,
					duration: 1.2,
				}}
				exit={{
					opacity: 0,
					transition: {
						delay: 0,
						duration: 1,
					},
				}}
			>
				{!isMobile && (
					<button
						className='text-laborWorkerBlue dark:text-white opacity-70 hover:opacity-100 transition-350'
						onClick={handleGoToNextPage}
					>
						<VscChevronDown size={60} />
					</button>
				)}
			</motion.div>
		</motion.div>
	)
}

export default AnimatePageTransition
