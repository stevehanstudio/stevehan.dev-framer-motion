import React, { useContext } from 'react'
// import DarkModeSwitch from './DarkModeSwitch'
import Switch from 'react-switch'
import { GrSystem } from 'react-icons/gr'
import { BsMoonFill, BsSunFill, BsFillMenuButtonWideFill } from 'react-icons/bs'
// import { RiExternalLinkFill } from 'react-icons/ri'
import { MdOpenInNew } from 'react-icons/md'
import Drawer from './Drawer'
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
		<Drawer isActive={isSettingsOpen} setIsActive={openSettingsMenu}>
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
							<span
								className={`${
									systemThemeEnabled ? 'opacity-30' : ''
								} pl-4 pr-1`}
							>
								<BsSunFill />
							</span>
							<Switch
								disabled={systemThemeEnabled}
								onChange={() => toggleTheme()}
								checked={theme === 'dark'}
								checkedIcon={false}
								uncheckedIcon={false}
							/>
							<span
								className={`${
									systemThemeEnabled ? 'opacity-30' : ''
								} pl-1`}
							>
								<BsMoonFill />
							</span>
						</label>
					</li>
					<li className='flex flex-row items-center mt-2 pb-2'>
						<GrSystem />
						<span className='pl-3 pr-10'>System</span>
						<label className='flex items-center'>
							<span className='pr-1'>Off</span>
							<Switch
								onChange={toggleSystemThemeEnabled}
								checked={!systemThemeEnabled}
								checkedIcon={false}
								uncheckedIcon={false}
							/>
							<span className='pl-1'>On</span>
						</label>
					</li>
				</div>
				<h4 className='pl-0 ml-0 text-left text-xl font-normal'>
					Navigation Menu Bar
				</h4>
				<div className='flex flex-col justify-between'>
					<li className='flex flex-row items-center my-2'>
						<BsFillMenuButtonWideFill />
						<span className='pl-3'>Menu Position</span>
						<label className='flex items-center'>
							<span className='pl-4 pr-1'>Bottom</span>
							<Switch
								onChange={() => toggleMobileMenuBottom()}
								checked={!mobileMenuBottom}
								checkedIcon={false}
								uncheckedIcon={false}
							/>
							<span className='pl-1'>Top</span>
						</label>
					</li>
				</div>
			</ul>
		</Drawer>
	)
}

export default SettingsDrawer