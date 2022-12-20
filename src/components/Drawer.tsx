import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
	isActive: boolean
	setIsActive: (isSettingsOpen: boolean) => void
	children: React.ReactNode
}

const Drawer: React.FC<Props> = ({ isActive, setIsActive, children }) => {
	return (
		<AnimatePresence>
			{isActive && (
				<>
					<motion.div
						drag='y'
						dragConstraints={{ top: 0, bottom: 0 }}
						onDragEnd={(_, info) => {
							if (info.offset.y > 300) setIsActive(false)
						}}
						className='drawer-wrapper'
					>
						<motion.div
							initial={{
								opacity: 0,
								y: '100vh',
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							exit={{
								opacity: 0.5,
								y: '110%',
							}}
							transition={{ type: 'spring', damping: 25, duration: 0.4 }}
						>
							<div className='drawer'>
								<div className='flex place-content-center'>
									<div className='border-t-4 w-12 rounded-md border-healthcareBlue dark:border-healthcareBlue' />
									{/* <div className='border-t-4 w-12 rounded-md border-gray-500 dark:border-gray-300' /> */}
								</div>
								<button
									onClick={() => setIsActive(false)}
									className='text-white bg-healthcareBlue opacity-80 text-lg h-8 w-8 block mb-2 rounded-full shadow-sm'
								>
									&times;
								</button>
								<div className='px-[1rem]'>{children}</div>
							</div>
						</motion.div>
					</motion.div>
					<motion.div
						className='drawer-background'
						onClick={() => setIsActive(false)}
						exit={{ opacity: 0 }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
					/>
				</>
			)}
		</AnimatePresence>
	)
}

export default Drawer
