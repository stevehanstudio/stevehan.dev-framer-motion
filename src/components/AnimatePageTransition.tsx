import React, { useState, useEffect, useContext, ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import mixpanel from 'mixpanel-browser'
import { VscChevronDown } from 'react-icons/vsc'
import { AppContext } from '../context/AppContext'
import { path } from '../constants/misc'

const AnimatePageTransition = ({ children }: { children: ReactNode }) => {
	const [allowScroll, setAllowScroll] = useState(false)
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isMobile, selectedNavMenuItem, setSelectedNavMenuItem, navDirection } = useContext(AppContext)
	// console.log(`pathname=${pathname}, navDirection=${navDirection}`)

	console.log('allowScroll', allowScroll)
	useEffect(() => {
		if (allowScroll) {
			const handleTouch = (ev: Event) => {
				ev.stopPropagation()
				// console.log('handleTouch')
			}
			document.documentElement.addEventListener('touchmove', handleTouch)
			return () => {
				document.documentElement.removeEventListener(
					'touchmove',
					handleTouch
				)
			}
		}
	}, [allowScroll])

	const handleGoToNextPage = () => {
		const nextMenuItem =
			selectedNavMenuItem === path.length - 1 ? 0 : selectedNavMenuItem + 1
		navigate(path[nextMenuItem])
		setSelectedNavMenuItem(nextMenuItem)
		mixpanel.track('Navigate to Next Page', {
			isMobile,
			currentPath: pathname,
			nextPath: path[nextMenuItem],
		})
		// console.log('mixpanel.track: Navigate to Next Page')
	}

	return (
		<motion.div
			key={pathname}
			onKeyDown={() => console.log('PageWrapper key press')}
			drag='y'
			onDragStart={(event, info) => {
				// console.log('PageWrapper drag detected', event, info)
				console.log('PageWrapper drag detected', event, info)
				if (isMobile) {
					console.log('Trying to drag up', info.delta.y)
					setAllowScroll(info.delta.y > 0)
					// event.preventDefault()
					// event.stopPropagation()
				}
			}}
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
						aria-label='go to next page'
					>
						<VscChevronDown size={60} />
					</button>
				)}
			</motion.div>
		</motion.div>
	)
}

export default AnimatePageTransition
