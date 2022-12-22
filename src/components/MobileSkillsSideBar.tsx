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
						className='drawer-background'
						onClick={() => setSideBar(false)}
						exit={{ opacity: 0 }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
					/>
					<motion.div
						layout
						initial={{
							scale: 0,
							top: 0,
							left: 0,
							y: '-47.5%',
							x: '-45.5%',
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
							y: '-47.5%',
							x: '-45.5%',
						}}
						transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
						// className='fixed z-40 bg-gray-200 text-gray-800 shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5'
						className='absolute backdrop-blur-lg z-50 w-[100vw] opacity-95 bg-gray-200 dark:bg-gray-800 dark:text-gray-100 text-gray-800 shadow-lg pb-8 pt-5 px-5 border-2 border-gray-400 h-auto'
						// className='fixed backdrop-blur-lg z-40 opacity-95 bg-gray-200 dark:bg-gray-800 dark:text-gray-100 text-gray-800 shadow-lg top-0 right-0 pb-8 pt-5 px-5 border-2 border-gray-400'
					>
						<button
							onClick={() => setSideBar(false)}
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
							<AnimatePresence initial={false} mode='popLayout'>
								{selectedSkills.map((skill, i) => {
									return (
										<motion.button
											// layout
											// initial={{
											// 	opacity: 0,
											// 	scale: 0.8,
											// 	// height: 0,
											// }}
											// animate={{
											// 	opacity: 1,
											// 	scale: 1,
											// 	// height: 'auto',
											// }}
											// exit={{
											// 	opacity: 0,
											// 	scale: 0.8,
											// 	// height: 0,
											// }}
											// style={{
											// 	originX: 1,
											// }}
											// transition={{
											// 	opacity: {
											// 		type: 'tween',
											// 		duration: 0.2,
											// 	},
											// 	layout: {
											// 		duration: i * 0.05
											// 	}
											// }}
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
										</motion.button>
									)
								})}
								{skills.map((skill, i) => {
									if (!selectedSkills.includes(skill)) {
										return (
											<motion.button
												// layout
												// initial={{
												// 	opacity: 0,
												// 	// scale: 0.8,
												// 	// height: 0,
												// }}
												// animate={{
												// 	opacity: 1,
												// 	// scale: 1,
												// 	// height: 'auto',
												// }}
												// exit={{
												// 	opacity: 0,
												// 	// scale: 0.8,
												// 	// height: 0,
												// }}
												// style={{
												// 	originX: 1,
												// }}
												// transition={{
												// 	opacity: {
												// 		ease: 'anticipate',
												// 		duration: 0.2,
												// 	},
												// 	layout: {
												// 		duration: i * 0.05,
												// 	},
												// }}
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
											</motion.button>
										)
									} else return null
								})}
							</AnimatePresence>

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