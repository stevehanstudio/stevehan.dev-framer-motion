import React, { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { navMenuItems } from '../constants/MenuItems'

const MobileMenu = () => {
	const location = useLocation()
  const { selectedNavMenuItem, setSelectedNavMenuItem, mobileMenuBottom } =
		useContext(AppContext)
	// console.log('selectedNavMenuItem', selectedNavMenuItem)

  return (
		<nav
			className={`${
				mobileMenuBottom
					? 'border-t-2 pt-[7px]'
					: 'border-b-2 mt-1 pb-0 mb-0 leading-none'
			} mobile-nav-menu`}
		>
			{navMenuItems.map((item, i) => (
				<NavLink
					to={item.url}
					state={{ previousPath: location.pathname || '/' }}
					// className='flex flex-col items-center justify-center center-text'
					key={item.title}
					onClick={() => setSelectedNavMenuItem(i)}
					className={({ isActive }) =>
						`menu-item ${isActive ? 'activeMenuItem' : ''}
									flex flex-col items-center justify-center center-text'
								 `
					}
				>
					<item.icon size={item.iconSize} className={item.iconClass} />
					<div
						className={`${
							mobileMenuBottom ? 'pb-0' : 'pb-1'
						} text-[0.6rem] center-text capitalize leading-snug`}
					>
						{item.title}
					</div>
					{selectedNavMenuItem === i && (
						<motion.div
							className={`${
								mobileMenuBottom ? 'bottom-underline' : 'top-underline'
							}`}
							layoutId='underline'
						/>
					)}
				</NavLink>
			))}
		</nav>
  )
}

export default MobileMenu
