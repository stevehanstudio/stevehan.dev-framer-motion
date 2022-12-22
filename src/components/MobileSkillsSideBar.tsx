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

const MobileSkillsSidebar: React.FC<Props> = ({
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
						layout
						initial={{
							scale: 0,
							top: 0,
							left: 0,
							y: '-48%',
							x: '-45%',
						}}
						animate={{
							scale: 1,
							top: -20,
							left: 38,
							y: 0,
							x: '-100%',
						}}
						exit={{
							scale: 0,
							top: 0,
							left: 0,
							y: '-48%',
							x: '-45%',
						}}
						transition={{ type: 'spring', bounce: 0, duration: 2.4 }}
						// className='fixed z-40 bg-gray-200 text-gray-800 shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5'
						className='absolute backdrop-blur-lg z-40 w-[100vw] opacity-95 bg-gray-200 dark:bg-gray-800 dark:text-gray-100 text-gray-800 shadow-lg pb-8 pt-5 px-5 border-2 border-gray-400'
						// className='fixed backdrop-blur-lg z-40 opacity-95 bg-gray-200 dark:bg-gray-800 dark:text-gray-100 text-gray-800 shadow-lg top-0 right-0 pb-8 pt-5 px-5 border-2 border-gray-400'
					>
						<button
							onClick={() => setSideBar(!sideBar)}
							className='bg-white text-black h-8 w-8 block mb-2 rounded-full'
						>
							&times;
						</button>
						<h2 className='text-3xl px-2 capitalize leading-loose'>
							All Skills
						</h2>
						<motion.div
							layout
							transition={{
								layout: {
									duration: 1,
								},
							}}
							className='flex flex-row flex-wrap'
						>
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
							{selectedSkills.map(skill => {
								return (
									<button
										role='checkbox'
										aria-checked='false'
										aria-labelledby={skill}
										className='skill skill-selected m-1'
										key={skill}
										onClick={(e: MouseEvent) =>
											handleSelectSkill(e, skill)
										}
									>
										{skill}
									</button>
								)
							})}
							{skills.map(skill => {
								if (!selectedSkills.includes(skill)) {
									return (
										<button
											role='checkbox'
											aria-checked='false'
											aria-labelledby={skill}
											className='skill skill-unselected m-1'
											key={skill}
											onClick={(e: MouseEvent) =>
												handleSelectSkill(e, skill)
											}
										>
											{skill}
										</button>
									)
								} else return null
							})}
							{/* {skills.map(skill => {
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
							})} */}
						</motion.div>
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

export default MobileSkillsSidebar