// import React, { useState, useEffect, useContext, useRef, MouseEvent } from 'react'
// import React, { useState, useEffect, useRef, MouseEvent } from 'react'
import React, {useState, useEffect, useRef, MouseEvent } from 'react'
import { motion } from 'framer-motion'
// import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { RiFilter3Line } from 'react-icons/ri'
import { MainComponentType } from '../types'
// import { AppContext } from '../context/AppContext'
import MobileSkillsSidebar from './MobileSkillsSideBar'

interface Props {
  componentType: MainComponentType
	skills: string[]
	selectedSkills: string[]
	showAllSkills: boolean
	handleSelectSkill: (e: MouseEvent, skill: string) => void
	handleShowAllSkills: (e: MouseEvent) => void
	handleSelectAllSkills: () => void
}

// const MobileSkillsComponent:React.FC<Props> = ({
// 	skills,
// 	selectedSkills,
// 	showAllSkills
// })

const MobileSkillsComponent:React.FC<Props> = ({
	skills,
	selectedSkills,
	showAllSkills,
	handleSelectSkill,
	handleShowAllSkills,
	handleSelectAllSkills,
}) => {
	const [width, setWidth] = useState(0)
	const [seeAllSkills, setSeeAllSkills] = useState(false)
	// const [currentX, setCurrentX] = useState(0)
	const skillsContainer = useRef<HTMLDivElement | null>(null)

	console.log(
		`skillsContainer.current.scrollWidth=${skillsContainer.current?.scrollWidth}, skillsContainer.current.offsetWidth=${skillsContainer.current?.offsetWidth}`
	)
	console.log('mobile skills container width', width)

  useEffect(() => {
		if (skillsContainer.current) {
			// setWidth(
			// 	skillsContainer.current.scrollWidth -
			// 		2 * skillsContainer.current.offsetWidth
			// )
			// console.log(
			// 	'About to set width',
			// 	width,
			// 	skillsContainer.current.scrollWidth,
			// 	skillsContainer.current.offsetWidth
			// )
			const updatedWidth =
				skillsContainer.current.scrollWidth -
				skillsContainer.current.offsetWidth
			if (width < updatedWidth)
				setWidth(updatedWidth)
			// setWidth(
			// 	skillsContainer.current.scrollWidth - skillsContainer.current.offsetWidth
			// )
		}
  }, [skills, width])

	return (
		<>
			<MobileSkillsSidebar
				sideBar={seeAllSkills}
				setSideBar={setSeeAllSkills}
				skills={skills}
				selectedSkills={selectedSkills}
				showAllSkills={showAllSkills}
				handleSelectSkill={handleSelectSkill}
				handleShowAllSkills={handleShowAllSkills}
				handleSelectAllSkills={handleSelectAllSkills}
			/>
			<div
				ref={skillsContainer}
				className='mobile-skills-carousel-container shadow-md'
			>
				<div className='absolute z-30 top-2 right-1'>
					<button
						className='float-right shadow-md p-2 text-white bg-laborWorkerBlue rounded-full'
						onClick={() => setSeeAllSkills(true)}
					>
						<RiFilter3Line />
					</button>
				</div>
				<motion.div className='mobile-skills-buttons-carousel'>
					<motion.div
						className='mobile-skills-buttons-inner-carousel'
						// key={JSON.stringify(selectedSkills)}
						drag='x'
						dragConstraints={{ right: 0, left: -width }}
						// viewport={{ once: true, amount: 1 }}
					>
						<motion.button
							role='checkbox'
							aria-checked='false'
							aria-labelledby='All skills'
							className={`skill ${
								selectedSkills.length === 0
									? ' skill-selected '
									: ' skill-unselected '
							} ml-2`}
							onClick={handleSelectAllSkills}
						>
							All
						</motion.button>
						{selectedSkills.map(skill => {
							return (
								<motion.button
									role='checkbox'
									aria-checked='false'
									aria-labelledby={skill}
									className='skill skill-selected'
									key={skill}
									onClick={(e: MouseEvent) =>
										handleSelectSkill(e, skill)
									}
								>
									{skill}
								</motion.button>
							)
						})}
						{skills.map(skill => {
							if (!selectedSkills.includes(skill)) {
								return (
									<motion.button
										role='checkbox'
										aria-checked='false'
										aria-labelledby={skill}
										className='skill skill-unselected'
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
{/* 						{skills.map(skill => {
							return (
								<button
									role='checkbox'
									aria-checked='false'
									aria-labelledby={skill}
									className={
										selectedSkills.includes(skill)
											? 'skill skill-selected'
											: 'skill skill-unselected'
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

				{/* {multiLineSkills ? (
				<div
					className={`expand-skills-button flex justify-end w-full pb-1 pr-3 mr-3 text-xs underline
					${
						expandButtonHover
							? 'expand-skills-button-hovered'
							: 'expand-skills-button-not-hovered'
					}
				`}
					onMouseOver={() => setExpandButtonHover(true)}
					onMouseOut={() => setExpandButtonHover(false)}
					onClick={handleShowAllSkills}
				>
					{showAllSkills ? 'See Less Skills' : 'See All Skills'}
				</div>
			) : (
				<div className='w-full h-2'></div>
			)}
			<motion.div
				ref={skillsContainer}
				animate={{
					maxHeight: showAllSkills
						? skillsContainer.current?.scrollHeight + 'px'
						: '47px',
				}}
				transition={{
					duration: 0.2,
					type: 'easeIn',
				}}
				className='flex flex-row overflow-hidden text-center'
			>
				<div>
					<button
						role='checkbox'
						aria-checked='false'
						aria-labelledby='All skills'
						className={`skill ${
							selectedSkills.length === 0
								? ' skill-selected '
								: ' skill-unselected '
						} ml-2`}
						onClick={handleSelectAllSkills}
					>
						All
					</button>
				</div>
				<div className='flex-wrap'>
					{skills.map(skill => {
						return (
							<button
								role='checkbox'
								aria-checked='false'
								aria-labelledby={skill}
								className={
									selectedSkills.includes(skill)
										? 'skill skill-selected'
										: 'skill skill-unselected'
								}
								key={skill}
								onClick={(e: MouseEvent) => handleSelectSkill(e, skill)}
							>
								{skill}
							</button>
						)
					})}
				</div>
				{multiLineSkills && (
					<FiChevronUp
						className={`expand-skills-button min-w-[3rem] w-[3rem] m-0 p-0 text-3xl font-semibold transition duration-500
						${showAllSkills ? ' -rotate-180' : ' rotate-0'}
						${
							expandButtonHover
								? ' expand-skills-button-hovered'
								: ' expand-skills-button-not-hovered'
						}
					`}
						onMouseOver={() => setExpandButtonHover(true)}
						onMouseOut={() => setExpandButtonHover(false)}
						onClick={handleShowAllSkills}
					/>
				)}
			</motion.div> */}
			</div>
		</>
	)
}

export default MobileSkillsComponent