import React, { useContext } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { navMenuItems } from '../constants/MenuItems'
import { Link } from 'react-router-dom'

const MobileMenu = () => {
  const { selectedNavMenuItem, setSelectedNavMenuItem, mobileMenuBottom } =
  // const { selectedNavMenuItem, setSelectedNavMenuItem } =
		useContext(AppContext)
	// console.log('selectedNavMenuItem', selectedNavMenuItem)

  return (
		<div
			className={`${
				mobileMenuBottom
					? 'border-t-2 pt-[7px]'
					: 'border-b-2 mt-1 pb-0 mb-0 leading-none'
			} mobile-underlined-menu overflow-y-hidden`}
		>
			{/* <nav className='flex flex-row align-middle overflow-y-hidden justify-between w-full mx-auto'> */}
			<nav className='flex flex-row align-middle justify-between w-full mx-auto'>
				<motion.ul
					initial={{
						y: -42,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						duration: 1.5,
					}}
					className='flex flex-row justify-between w-full'
				>
					<AnimateSharedLayout>
						{navMenuItems.map((item, i) => (
							<motion.li
								key={i}
								// className='mobile-nav-link'
								// className={`
								// 	mobile-nav-link ${
								// 		selectedNavMenuItem === i
								// 			? 'mobile-nav-link mobile-active'
								// 			: 'mobile-nav-link'
								// 	}
								// `}
								className='menu-item'
								// className={
								// 	selectedNavMenuItem === i
								// 		? 'active nav-link menu-item'
								// 		: 'nav-link menu-item'
								// }
								animate={{
									// opacity: selectedNavMenuItem === i ? 1 : 0.5,
									color:
										selectedNavMenuItem === i ? '#4294ee' : 'gray',
								}}
								onClick={() => setSelectedNavMenuItem(i)}
							>
								{/* {mobileMenuBottom && selectedNavMenuItem === i && (
									<motion.div
										className='underline'
										layoutId='underline'
									/>
								)} */}
								<Link
									to={item.url}
									className='flex flex-col items-center justify-center center-text'
								>
									<item.icon
										size={item.iconSize}
										className={item.iconClass}
									/>
									<div
										className={`${
											mobileMenuBottom ? 'pb-0' : 'pb-1'
										} text-[0.6rem] center-text capitalize leading-snug`}
									>
										{item.title}
									</div>
								</Link>
								{selectedNavMenuItem === i && (
									<motion.div
										className={`${
											mobileMenuBottom
												? 'bottom-[calc(112%_-_1px)] h-[4px] underline-offset-[35px]'
												: 'h-[4px] top-[calc(100%_-_3px)]'
										} underline`}
										// className='top-[100%] h-1 underline'
										layoutId='underline'
									/>
								)}
							</motion.li>
						))}
					</AnimateSharedLayout>
				</motion.ul>
			</nav>
		</div>
  )
}

export default MobileMenu
