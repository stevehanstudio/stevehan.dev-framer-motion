import React, { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import DarkModeSwitch from './DarkModeSwitch'
import { AppContext } from '../context/AppContext'
import { navMenuItems, socialMenuItems} from '../constants/MenuItems'

const Menu: React.FC= () => {
  const { theme, toggleTheme, selectedNavMenuItem, setSelectedNavMenuItem} = useContext(AppContext)
	// console.log('selectedNavMenuItem', selectedNavMenuItem)
	const location = useLocation()

  return (
		<nav className='nav-menu'>
			<motion.ul
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className='flex flex-row'
			>
					{navMenuItems.map((item, i) => (
						<li
							key={i}
							className='menu-item'
							onClick={() => setSelectedNavMenuItem(i)}
						>
							<NavLink
								to={item.url}
								state={{ previousPath: location.pathname || '/' }}
								className={({ isActive }) =>
									isActive ? 'activeMenuItem' : ''
								}
							>
								{item.title}
								{selectedNavMenuItem === i && (
									<motion.div
										className='underline'
										layoutId='underline'
									/>
								)}
							</NavLink>
						</li>
					))}
			</motion.ul>
			<motion.ul
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{ duration: 1.5 }}
				className='flex flex-row'
			>
				{socialMenuItems.map((item, i) => (
					<li
						key={i}
						className='social-menu-item tooltip expand fade'
						data-title={item.title}
					>
						<a
							href={item.url}
							target='_blank'
							rel='noopener noreferrer'
						>
							<item.icon size={item.iconSize} />
						</a>
					</li>
				))}
				<button
					data-tip={
						theme === 'dark'
							? 'Switch to Light Mode'
							: 'Switch to Dark Mode'
					}
					data-offset="{'top': -19, 'left': -20}"
					className='pl-5'
					onClick={toggleTheme}
				>
					<DarkModeSwitch theme={theme} />
				</button>
			</motion.ul>
		</nav>
  )
}

export default Menu
