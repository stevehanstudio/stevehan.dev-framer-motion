import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion, LayoutGroup } from 'framer-motion'
import DarkModeSwitch from './DarkModeSwitch'
import { AppContext } from '../context/AppContext'
import { navMenuItems, socialMenuItems} from '../constants/MenuItems'
// import '../styles/global.scss'

const Menu: React.FC= () => {
  const { theme, toggleTheme, selectedNavMenuItem, setSelectedNavMenuItem} = useContext(AppContext)
	console.log('selectedNavMenuItem', selectedNavMenuItem)

  return (
		<div className='underlined-menu pb-10'>
			<nav className='flex flex-row items-start justify-between w-full mx-auto underlined-menu max-w-7xl'>
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
					<LayoutGroup>
						{/* <AnimateSharedLayout> */}
						{navMenuItems.map((item, i) => (
							<motion.li
								key={i}
								className='menu-item'
								// className={
								// 	selectedNavMenuItem === i
								// 		? 'active nav-link menu-item'
								// 		: 'nav-link menu-item'
								// }
								animate={{
									opacity: selectedNavMenuItem === i ? 1 : 0.5,
								}}
								onClick={() => setSelectedNavMenuItem(i)}
							>
								<Link to={item.url}>{item.title}</Link>
								{/* {item.title} */}
								{selectedNavMenuItem === i && (
									<motion.div
										className='underline'
										layoutId='underline'
									/>
								)}
							</motion.li>
						))}
					</LayoutGroup>
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
							className='nav-link tooltip expand fade'
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
		</div>
  )
}

export default Menu
