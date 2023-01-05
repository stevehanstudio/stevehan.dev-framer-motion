import React, { useContext } from 'react'
// import DarkModeSwitch from './DarkModeSwitch'
import Switch from 'react-switch'
import mixpanel from 'mixpanel-browser'
import { GrSystem } from 'react-icons/gr'
import { BsMoonFill, BsSunFill, BsFillMenuButtonWideFill } from 'react-icons/bs'
// import { RiExternalLinkFill } from 'react-icons/ri'
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
					<li
						key={i}
						className='min-w-full my-2'
						onClick={() => {
							mixpanel.track('External Link', {
								isMobile: true,
								buttonName: item.title,
							})
							window.open(item.url, '_blank', 'noopener,noreferrer')
						}}
					>
						<div className='flex flex-row items-center'>
							{/* <a
							href={item.url}
							target='_blank'
							rel='noopener noreferrer'
							className='flex flex-row items-center'
						> */}
							<item.icon size={item.iconSize} />
							<span className='pl-3 pr-5'>{item.title}</span>
							{/* </a> */}
						</div>
					</li>
				))}
				<h4 className='pl-0 mt-2 pb-2 ml-0 text-left text-xl font-normal'>
					Dark / Light Mode
				</h4>
				<div className='flex flex-col'>
					<li className='flex flex-row items-center my-2 justify-between w-full'>
						{/* <label> */}
						<div className='flex flex-row items-center'>
							{theme === 'dark' ? <BsMoonFill /> : <BsSunFill />}
							<span className='pl-3'>{`${
								theme === 'dark' ? 'Dark' : 'Light'
							} Mode`}</span>
						</div>
						<div className='flex flex-row items-center'>
							<span
								className={`${
									systemThemeEnabled ? 'opacity-30' : ''
								} pr-2`}
							>
								<BsSunFill />
							</span>
							<Switch
								disabled={systemThemeEnabled}
								onChange={() => toggleTheme()}
								checked={theme === 'dark'}
								checkedIcon={false}
								uncheckedIcon={false}
								onColor='#4294ee'
							/>
							<span
								className={`${
									systemThemeEnabled ? 'opacity-30' : ''
								} pl-2`}
							>
								<BsMoonFill />
							</span>
						</div>
						{/* </label> */}
					</li>
					<li className='flex flex-row items-center mt-2 pb-2 justify-between'>
						<div className='flex flex-row items-center'>
							<GrSystem />
							<span className='pl-3 pr-10'>System</span>
						</div>
						<div className='flex items-center'>
							<span className='pr-1'>Off</span>
							<Switch
								onChange={toggleSystemThemeEnabled}
								checked={systemThemeEnabled}
								checkedIcon={false}
								uncheckedIcon={false}
								onColor='#4294ee'
							/>
							<span className='pl-1'>On</span>
						</div>
					</li>
				</div>
				<h4 className='pl-0 ml-0 text-left text-xl font-normal'>
					Navigation Menu Bar
				</h4>
				<div className='flex flex-col justify-between'>
					<li className='flex flex-row items-center my-2 justify-between'>
						<div className='flex flex-row items-center'>
							<BsFillMenuButtonWideFill />
							<span className='pl-3'>Menu Position</span>
						</div>
						<div className='flex items-center -mr-[0.5rem]'>
							<span className='pl-4 pr-1'>Bottom</span>
							<Switch
								onChange={() => toggleMobileMenuBottom()}
								checked={!mobileMenuBottom}
								checkedIcon={false}
								uncheckedIcon={false}
								onColor='#4294ee'
							/>
							<span className='pl-1'>Top</span>
						</div>
					</li>
				</div>
			</ul>
		</Drawer>
	)
}

export default SettingsDrawer