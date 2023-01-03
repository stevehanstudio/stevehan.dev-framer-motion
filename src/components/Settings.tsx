import React, { useState, useContext } from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { AppContext } from '../context/AppContext'
import SettingsDrawer from './SettingsDrawer'

const Settings = () => {
  const [isSettingsOpen, openSettingsMenu] = useState(false)
	const { mobileMenuBottom } = useContext(AppContext)

  return (
		<div>
			<SettingsDrawer
				isSettingsOpen={isSettingsOpen}
				openSettingsMenu={openSettingsMenu}
			/>
			<div
				className={`${
					mobileMenuBottom ? 'top-2' : 'bottom-2'
				} fixed z-0 right-1`}
				onClick={() => openSettingsMenu(true)}
			>
				<button className='shadow-md p-2 text-white bg-laborWorkerBlue dark:opacity-100 opacity-90 rounded-full' arial-label='open settings menu'>
					<HiOutlineDotsHorizontal />
				</button>
			</div>
		</div>
  )
}

export default Settings