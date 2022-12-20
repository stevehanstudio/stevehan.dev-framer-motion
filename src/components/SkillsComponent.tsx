import React, { useState, useEffect, useRef, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { FiChevronUp } from 'react-icons/fi'
import { MainComponentType } from '../types'

interface Props {
  componentType: MainComponentType
	skills: string[]
	selectedSkills: string[]
	showAllSkills: boolean
	handleSelectSkill: (e: MouseEvent, skill: string) => void
	handleShowAllSkills: (e: MouseEvent) => void
	handleSelectAllSkills: () => void
}

const SkillsComponent:React.FC<Props> = ({
	skills,
	selectedSkills,
	showAllSkills,
	handleSelectSkill,
	handleShowAllSkills,
	handleSelectAllSkills,
}) => {
	const skillsContainer = useRef<HTMLDivElement>(null)
	const [expandButtonHover, setExpandButtonHover] = useState(false)
	const [multiLineSkills, setMultiLineSkills] = useState(false)

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (skillsContainer.current) {
				setMultiLineSkills(skillsContainer.current?.scrollHeight > 48)
			}
		})
	}, [])

	useEffect(() => {
		if (skillsContainer.current) {
			setMultiLineSkills(skillsContainer.current?.scrollHeight > 48)
		}
	}, [
		skillsContainer.current?.scrollHeight
	])

	return (
		<>
			{multiLineSkills ? (
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
				<motion.div
					layout
					transition={{
						layout: {
							duration: 0.4,
						},
					}}
					className='flex-wrap'
				>
					{selectedSkills.map(skill => {
						return (
							<button
								role='checkbox'
								aria-checked='false'
								aria-labelledby={skill}
								className='skill skill-selected'
								key={skill}
								onClick={(e: MouseEvent) => handleSelectSkill(e, skill)}
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
									className='skill skill-unselected'
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
				</motion.div>
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
			</motion.div>
		</>
	)
}

export default SkillsComponent