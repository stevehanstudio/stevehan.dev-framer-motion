import React, { useState, useContext } from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { AppContext } from '../context/AppContext'
import SettingsDrawer from './SettingsDrawer'

// interface Props {
// 	isSettingsOpen: boolean
// 	openSettingsMenu: (isSettingsOpen: boolean) => void
// }

const Settings = () => {
  const [isSettingsOpen, openSettingsMenu] = useState(false)
	const { mobileMenuBottom } = useContext(AppContext)

  return (
		<div>
			<SettingsDrawer
				isSettingsOpen={isSettingsOpen}
				openSettingsMenu={openSettingsMenu}
			/>
			<div className={`${mobileMenuBottom ? 'top-2' : 'bottom-2'} fixed z-30 right-1`}>
				<button
          className='shadow-md p-2 text-white bg-laborWorkerBlue dark:opacity-100 opacity-90 rounded-full'
          onClick={() => openSettingsMenu(true)}
        >
					<HiOutlineDotsHorizontal />
				</button>
			</div>
		</div>
  )
}

export default Settings