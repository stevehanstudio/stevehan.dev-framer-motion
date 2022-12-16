// import React, { useState, useRef, useEffect, useContext, KeyboardEvent, MouseEvent } from 'react'
import React, { useState, useEffect, useContext, MouseEvent } from 'react'
// import { motion, Variants } from 'framer-motion'
// import { InView } from 'react-intersection-observer'
import SkillsComponent from './SkillsComponent'
// import CardComponent from './CardComponent'
import { DataType, MainComponentType } from '../types'
// import CarouselOverlay from './CarouselOverlay'
import { AppContext } from '../context/AppContext'
import MainCarousel from './MainCarousel'
import MobileSkillsComponent from './MobileSkillsComponent'
import MobileCardsComponent from './MobileCardsComponent'

interface Props {
  componentType: MainComponentType
}

const MainComponent: React.FC<Props> = ({ componentType }) => {
	const [dataObject, setDataObject] = useState<DataType[] | []>([])
	const [selectedDataObject, setSelectedDataObject] = useState<
		DataType[] | []
	>([])
	const [skills, setSkills] = useState<string[]>([])
	const [selectedSkills, setSelectedSkills] = useState<string[]>([])
	const [showAllSkills, setShowAllSkills] = useState(false)
	// const totalDataObject = selectedDataObject.length
	// const offset = useMotionValue(0)
	// offset.onChange(val => console.log('useMotionValue', val))

	const {
		// selectedNavMenuItem,
		// setSelectedNavMenuItem,
		// projectsRef,
		// dragDetected,
		// handleDragDetected,
		isMobile,
		mobileMenuBottom
	} = useContext(AppContext)

	useEffect(() => {
		fetch(
			componentType === 'Projects'
				? 'projects.json'
				: 'certificates.json'
		)
			.then(res => res.json())
			.then((dataFromSource: DataType[]) => {
				const reorderedData = dataFromSource.reverse()
				setDataObject(reorderedData)
				setSelectedDataObject(reorderedData)
				const listOfSkills: string[] = []
				dataFromSource.forEach(data => {
					data.skills.forEach((skill: string) => {
						if (!listOfSkills.includes(skill)) {
							listOfSkills.push(skill)
						}
					})
				})
				setSkills(listOfSkills)
			})
	}, [componentType])

	useEffect(() => {
		if (selectedSkills.length === 0) {
			setSelectedDataObject(dataObject)
		} else {
			const dataToSelect: DataType[] = dataObject.filter((data, i) =>
				selectedSkills.every(s => data.skills.includes(s))
			)
			setSelectedDataObject(dataToSelect)
		}
	}, [selectedSkills, dataObject])

	const handleShowAllSkills = (e: MouseEvent) => {
		if (showAllSkills === true) {
			setShowAllSkills(false)
		} else {
			setShowAllSkills(true)
		}
	}

	const handleSelectAllSkills = () => {
		setSelectedSkills([])
	}

	const handleSelectSkill = (e: MouseEvent, skill: string) => {
		// There is no selected skill
		if (selectedSkills.length === 0) {
			setSelectedSkills([skill])
		}
		// If there is or are selected skill(s)
		else if (!selectedSkills.includes(skill)) {
			const skillsToSelect = [...selectedSkills, skill]
			setSelectedSkills(skillsToSelect)
			// The skill is already selected, we need to deselect it
		} else {
			// console.log('Deleting skill', skill)

			const skillsToSelect = selectedSkills.filter(
				selectedSkill => selectedSkill !== skill
			)
			setSelectedSkills(skillsToSelect)
		}
	}


	// const handleDrag = (event: MouseEvent<Element, MouseEvent> | TouchEvent | PointerEvent, info: PanInfo) => {
	// const handleDrag = (info: PanInfo) => {
	// 	console.log('handleDrag', info)
	// 	if (info.offset.x > 1) {
	// 		handleScrollLeft()
	// 	} else if (info.offset.x < -1) {
	// 		handleScrollRight()
	// 	}
	// }

/*	const handleInView = (inView: boolean) => {
		console.log(`componentType: ${componentType} inView=${inView}`)

		if (inView === true) {
			if (componentType === 'Projects' && selectedNavMenuItem !== 1) {
				setSelectedNavMenuItem(1)
				if (projectsRef && projectsRef.current) {
					console.log('scrollIntoView()')
					// projectsRef.current.scrollIntoView({
					// 	behavior: 'smooth',
					// 	block: 'start',
					// })
					window.scrollTo(0, projectsRef.current.offsetTop)
				}
			} else if (componentType === 'Certificates' && selectedNavMenuItem !== 2) {
				setSelectedNavMenuItem(2)
			}
		}
	}
*/
	// console.log(
	// 	`width: ${width}, window.innerWidth: ${window.innerWidth}, carousel.current.clientWidth: ${carousel.current?.clientWidth} carousel.current.scrollWidth: ${carousel.current?.scrollWidth}, carousel.current.offsetWidth: ${carousel.current?.offsetWidth}, X: ${currentX}`
	// )
	// console.log(
	// 	`componentType: ${componentType}, width: ${width}, carousel.current?.clientWidth: ${carousel.current?.clientWidth}, currentX: ${currentX}`
	// )
	// console.log('carouselMeasureRef, bounds', carouselMeasureRef, bounds)
	return (
		// <InView
		// 	as='div'
		// 	threshold={0.4}
		// 	onChange={(inView, entry) => handleInView(inView)}
		// 	className='flex flex-col h-screen section'
		// 	tabIndex={0}
		// 	onKeyUp={handleKeyPress}
		// >
		<div className={`section ${isMobile && mobileMenuBottom ? 'mt-5 p-0' : ''}`}>
			<h2 className='section-title'>{componentType}</h2>
			{isMobile ? (
				<MobileSkillsComponent
					componentType={componentType}
					skills={skills}
					selectedSkills={selectedSkills}
					showAllSkills={showAllSkills}
					handleSelectSkill={handleSelectSkill}
					handleShowAllSkills={handleShowAllSkills}
					handleSelectAllSkills={handleSelectAllSkills}
				/>
			) : (
				<SkillsComponent
					componentType={componentType}
					skills={skills}
					selectedSkills={selectedSkills}
					showAllSkills={showAllSkills}
					handleSelectSkill={handleSelectSkill}
					handleShowAllSkills={handleShowAllSkills}
					handleSelectAllSkills={handleSelectAllSkills}
				/>
			)}
			{selectedDataObject.length === 0 ? (
				<div className='flex items-center h-full px-5 mx-auto text-2xl text-center md:px-7 max-w-7xl dark:text-gray-200'>
					No project found that uses the combination of
					{selectedSkills.map((s, i) =>
						i === selectedSkills.length - 1 ? ` and ${s}.` : ` ${s},`
					)}
				</div>
			) : isMobile ? (
				<MobileCardsComponent
					componentType={componentType}
					dataObject={dataObject}
					selectedDataObject={selectedDataObject}
					selectedSkills={selectedSkills}
				/>
			) : (
				<MainCarousel
					componentType={componentType}
					dataObject={dataObject}
					selectedDataObject={selectedDataObject}
					selectedSkills={selectedSkills}
				/>
			)}
		</div>
	)
}

export default MainComponent
