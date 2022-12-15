import React, { useState } from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import SettingsDrawer from './SettingsDrawer'

// interface Props {
// 	isSettingsOpen: boolean
// 	openSettingsMenu: (isSettingsOpen: boolean) => void
// }

const Settings = () => {
  const [isSettingsOpen, openSettingsMenu] = useState(false)

  return (
		<div>
			<SettingsDrawer
				isSettingsOpen={isSettingsOpen}
				openSettingsMenu={openSettingsMenu}
			/>
			<div className='fixed z-30 bottom-2 right-1'>
				<button
          className='shadow-md p-2 text-white bg-laborWorkerBlue rounded-full'
          onClick={() => openSettingsMenu(true)}
        >
					<HiOutlineDotsHorizontal />
				</button>
			</div>
		</div>
  )
}

export default Settings