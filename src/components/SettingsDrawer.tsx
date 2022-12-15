import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
// import DarkModeSwitch from './DarkModeSwitch'
// import { AppContext } from '../context/AppContext'
import { socialMenuItems } from '../constants/MenuItems'
import { GrSystem } from 'react-icons/gr'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

interface Props {
  isSettingsOpen: boolean
	openSettingsMenu: (isSettingsOpen: boolean) => void
}

const SettingsDrawer: React.FC<Props> = ({ isSettingsOpen, openSettingsMenu }) => {
  return (
		<AnimatePresence>
			{isSettingsOpen && (
				<>
					<motion.div
						initial={{ y: '100vh' }}
						animate={{
							y: 400,
						}}
						exit={{
							y: '100vh',
						}}
						transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
						className='fixed z-40 bg-gray-100 text-gray-800 shadow-lg top-0 right-0 w-full max-w-sm h-auto p-5'
					>
						<button
							onClick={() => openSettingsMenu(!isSettingsOpen)}
							className='bg-white text-black h-8 w-8 block mb-2 rounded-full'
						>
							&times;
						</button>
						<h2 className='text-4xl capitalize leading-loose'>
							Settings
						</h2>
						<ul className='flex flex-col w-full'>
							{socialMenuItems.map((item, i) => (
								<li
									key={i}
									className='min-w-full flex flex-col my-2'
								>
									<a
										href={item.url}
										target='_blank'
										rel='noopener noreferrer'
									>
										<item.icon size={item.iconSize} />
										<span>{item.title}</span>
									</a>
								</li>
							))}
							<li>
								<BsMoonFill /> <BsSunFill /> Dark / Light Mode
							</li>
							<li>
								<GrSystem />System
							</li>
						</ul>
						<p className='leading-relaxed'>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's
							standard dummy text ever since the 1500s.
						</p>
					</motion.div>
				</>
			)}
		</AnimatePresence>
  )
}

export default SettingsDrawer