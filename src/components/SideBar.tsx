import React, { MouseEvent } from 'react'
import { motion, AnimatePresence } from "framer-motion"

interface Props {
	sideBar: boolean
	setSideBar: (sideBar: boolean) => void
	skills: string[]
	selectedSkills: string[]
	showAllSkills: boolean
	handleSelectSkill: (e: MouseEvent, skill: string) => void
	handleShowAllSkills: (e: MouseEvent) => void
	handleSelectAllSkills: () => void
}

const Sidebar: React.FC<Props> = ({
	sideBar,
	setSideBar,
	skills,
	selectedSkills,
	showAllSkills,
	handleSelectSkill,
	handleShowAllSkills,
	handleSelectAllSkills
}) => {
	return (
		<AnimatePresence>
			{sideBar && (
				<>
					<motion.div
						initial={{ x: '100%' }}
						animate={{
							x: 0,
						}}
						exit={{
							x: '100%',
						}}
						transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
						// className='fixed z-40 bg-gray-200 text-gray-800 shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5'
						className='fixed backdrop-blur-lg z-40 opacity-95 bg-gray-200 text-gray-800 shadow-lg top-0 right-0 p-5'
					>
						<button
							onClick={() => setSideBar(!sideBar)}
							className='bg-white text-black h-8 w-8 block mb-2 rounded-full'
						>
							&times;
						</button>
						<h2 className='text-4xl capitalize leading-loose'>
							All Skills
						</h2>
						<div>
							<button
								role='checkbox'
								aria-checked='false'
								aria-labelledby='All skills'
								className={`skill ${
									selectedSkills.length === 0
										? ' skill-selected '
										: ' skill-unselected '
								} m-1`}
								onClick={handleSelectAllSkills}
							>
								All
							</button>
							{skills.map(skill => {
								return (
									<button
										role='checkbox'
										aria-checked='false'
										aria-labelledby={skill}
										className={
											selectedSkills.includes(skill)
												? 'skill skill-selected m-1'
												: 'skill skill-unselected m-1'
										}
										key={skill}
										onClick={(e: MouseEvent) =>
											handleSelectSkill(e, skill)
										}
									>
										{skill}
									</button>
								)
							})}
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
						}}
						exit={{
							opacity: 0,
						}}
						transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
						onClick={() => setSideBar(!sideBar)}
						className='bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0'
					/>
				</>
			)}
		</AnimatePresence>
	)
}

export default Sidebar