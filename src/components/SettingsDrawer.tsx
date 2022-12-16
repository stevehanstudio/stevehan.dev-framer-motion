import React, { useContext } from 'react'
import { motion, AnimatePresence } from "framer-motion"
// import DarkModeSwitch from './DarkModeSwitch'
import Switch from 'react-switch'
import { GrSystem } from 'react-icons/gr'
import { BsMoonFill, BsSunFill, BsFillMenuButtonWideFill } from 'react-icons/bs'
// import { RiExternalLinkFill } from 'react-icons/ri'
import { MdOpenInNew } from 'react-icons/md'
import { AppContext } from '../context/AppContext'
import { socialMenuItems } from '../constants/MenuItems'

interface Props {
  isSettingsOpen: boolean
	openSettingsMenu: (isSettingsOpen: boolean) => void
}

const SettingsDrawer: React.FC<Props> = ({ isSettingsOpen, openSettingsMenu }) => {
	const {
		theme,
		toggleTheme,
		mobileMenuBottom,
		toggleMobileMenuBottom,
		systemThemeEnabled,
		toggleSystemThemeEnabled,
	} = useContext(AppContext)

	return (
		<AnimatePresence>
			{isSettingsOpen && (
				<>
					<motion.div
						initial={{ y: '100vh' }}
						animate={{
							y: 220,
						}}
						exit={{
							y: '100vh',
						}}
						transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
						className='fixed z-40 rounded-t-3xl border-2 border-gray-400 dark:border-gray-300 bg-gray-100 opacity-95 dark:bg-gray-800 text-gray-800 dark:text-gray-200 top-0 right-0 w-full max-w-sm h-auto p-5 shadow-[0px_-3px_-8px_rgba(0,0,0,0.8)]'
					>
						{/* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */}
						<button
							onClick={() => openSettingsMenu(!isSettingsOpen)}
							className='bg-gray-50 text-black h-8 w-8 block mb-2 rounded-full shadow-sm'
						>
							&times;
						</button>
						<h4 className='text-xl font-normal capitalize leading-loose'>
							My Info
						</h4>
						<ul className='flex flex-col w-full pb-4'>
							{socialMenuItems.map((item, i) => (
								<li key={i} className='min-w-full my-2'>
									<a
										href={item.url}
										target='_blank'
										rel='noopener noreferrer'
										className='flex flex-row items-center'
									>
										<item.icon size={item.iconSize} />
										<span className='pl-3 pr-5'>{item.title}</span>
										<MdOpenInNew size={18} />
									</a>
								</li>
							))}
							<h4 className='pl-0 mt-2 pb-2 ml-0 text-left text-xl font-normal'>
								Dark / Light Mode
							</h4>
							<div className='flex flex-col justify-between'>
								<li className='flex flex-row items-center my-2'>
									{theme === 'dark' ? <BsMoonFill /> : <BsSunFill />}
									<span className='pl-3'>{`${
										theme === 'dark' ? 'Dark' : 'Light'
									} Mode`}</span>
									<label className='flex items-center'>
										<span className={`${systemThemeEnabled ? 'opacity-30' : ''} pl-4 pr-1`}>
											<BsSunFill />
										</span>
										<Switch
											disabled={systemThemeEnabled}
											onChange={() => toggleTheme()}
											checked={theme === 'dark'}
											checkedIcon={false}
											uncheckedIcon={false}
										/>
										<span className={`${systemThemeEnabled ? 'opacity-30' : ''} pl-1`}>
											<BsMoonFill />
										</span>
									</label>
								</li>
								<li className='flex flex-row items-center mt-2 pb-2'>
									<GrSystem />
									<span className='pl-3 pr-10'>System</span>
									<label className='flex items-center'>
										<span className='pr-1'>On</span>
										<Switch
											onChange={toggleSystemThemeEnabled}
											checked={!systemThemeEnabled}
											checkedIcon={false}
											uncheckedIcon={false}
										/>
										<span className='pl-1'>Off</span>
									</label>
								</li>
							</div>
							<h4 className='pl-0 ml-0 text-left text-xl font-normal'>
								Navigation Menu Bar
							</h4>
							<div className='flex flex-col justify-between'>
								<li className='flex flex-row items-center my-2'>
									<BsFillMenuButtonWideFill />
									<span className='pl-3'>
										Menu {`${mobileMenuBottom ? 'Bottom' : 'Top'}`}
									</span>
									<label className='flex items-center'>
										<span className='pl-4 pr-1'>Top</span>
										<Switch
											onChange={() => toggleMobileMenuBottom()}
											checked={mobileMenuBottom}
											checkedIcon={false}
											uncheckedIcon={false}
										/>
										<span className='pl-1'>Bottom</span>
									</label>
								</li>
							</div>
						</ul>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}

export default SettingsDrawer