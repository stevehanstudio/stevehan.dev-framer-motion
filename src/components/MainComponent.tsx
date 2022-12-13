'use client'
import React, { useState, useRef, useEffect, useContext, KeyboardEvent, MouseEvent } from 'react'
import { motion, Variants } from 'framer-motion'
// import { InView } from 'react-intersection-observer'
// import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
// import AnimateHeight from 'react-animate-height'
import SkillsComponent from './SkillsComponent'
import CardComponent from './CardComponent'
import { DataType, MainComponentType } from '../types'
// import CarouselOverlay from './CarouselOverlay'
import { AppContext } from '../context/AppContext'

const cardContainer: Variants = {
	offscreen: {
		opacity: 0,
	},
	onscreen: {
		opacity: 1,
	},
}

const cardAnimate: Variants = {
	offscreen: {
		x: '100vw',
		opacity: 0,
	},
	onscreen: {
		x: 0,
		opacity: 1,
		transition: {
			// type: 'anticipate',
			type: 'tween',
			// type: 'easeIn',
			duration: 1.5,
		},
	},
}

// async function fetchData(componentType: MainComponentType) {
// 	const response = await fetch(
// 		componentType === MainComponentType.Projects
// 			? 'projects.json'
// 			: 'certificates.json',
// 		{
// 			cache: 'force-cache',
// 		}
// 	)
// 	return response.json()
// }

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
	// const [carouselMeasureRef, bounds] = useMeasure()
	const [width, setWidth] = useState(0)
	const [currentX, setCurrentX] = useState(0)
	const carousel = useRef<HTMLDivElement | null>(null)
	const totalDataObject = selectedDataObject.length
	const withinLeftBound = currentX < 0
	const withinRightBound = currentX > -width
	// const offset = useMotionValue(0)
	// offset.onChange(val => console.log('useMotionValue', val))

	const {
		// selectedNavMenuItem,
		// setSelectedNavMenuItem,
		// projectsRef,
		// dragDetected,
		handleDragDetected,
	} = useContext(AppContext)

	useEffect(() => {
		if (carousel.current) {
			// console.log('componentType', componentType)
			// console.log('window.innerWidth', window.innerWidth)
			// console.log(
			// 	'carousel.current',
			// 	carousel.current.scrollWidth,
			// 	carousel.current.offsetWidth
			// )
			setWidth(
				carousel.current.scrollWidth - 2 * carousel.current.offsetWidth
			)
		}
	}, [dataObject])

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

	const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'ArrowLeft') {
			handleScrollLeft()
		} else if (e.key === 'ArrowRight') {
			handleScrollRight()
		}
	}

	const handleScrollLeft = () => {
		if (carousel.current) {
			if (currentX + carousel.current?.clientWidth > 0) {
				setCurrentX(0)
			} else {
				setCurrentX(currentX + carousel.current?.clientWidth - 200)
			}
		}
	}

	const handleScrollRight = () => {
		console.log('handleScrollRight')
		if (carousel.current) {
			if (currentX - carousel.current?.clientWidth < -width) {
				setCurrentX(-width)
			} else {
				setCurrentX(currentX - carousel.current?.clientWidth + 200)
			}
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

	const handleAnimationComplete = () => {
		// console.log(event, info.offset.x, info.point.x)
		console.log(
			`handleAnimationComplete:	currentX=${currentX}, carousel.current?.clientWidth=${carousel.current?.clientWidth}`
			// carouselMeasureRef
		)
	}

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
		<div className='section'>
			<h2 className='section-title'>{componentType}</h2>
			<SkillsComponent
				componentType={componentType}
				skills={skills}
				selectedSkills={selectedSkills}
				showAllSkills={showAllSkills}
				handleSelectSkill={handleSelectSkill}
				handleShowAllSkills={handleShowAllSkills}
				handleSelectAllSkills={handleSelectAllSkills}
			/>
			{selectedDataObject.length === 0 ? (
				<div className='flex items-center h-full px-5 mx-auto text-2xl text-center md:px-7 max-w-7xl dark:text-gray-200'>
					No project found that uses the combination of
					{selectedSkills.map((s, i) =>
						i === selectedSkills.length - 1 ? ` and ${s}.` : ` ${s},`
					)}
				</div>
			) : (
				<div className='carousel-container'>
					<motion.div
						ref={carousel}
						className={`cards-carousel
					${
						withinLeftBound && withinRightBound
							? 'fade-left-right'
							: withinLeftBound
							? 'fade-left'
							: withinRightBound
							? 'fade-right'
							: ''
					}`}
					>
						<motion.div
							// onDragEnd={(event, info) => handleDrag(event, info)}
							onKeyDown={handleKeyPress}
							onAnimationComplete={handleAnimationComplete}
							key={JSON.stringify(selectedSkills)}
							drag='x'
							onDragEnd={handleDragDetected}
							// onDragStart={(event, info) => handleDrag(info)}
							// dragElastic={0.8}
							// dragMomentum={false}
							dragConstraints={{ right: 0, left: -width }}
							className='cards-inner-carousel'
							initial='offscreen'
							whileInView='onscreen'
							variants={cardContainer}
							viewport={{ once: true, amount: 1 }}
							transition={{
								staggerChildren: 0.3,
							}}
							animate={{
								x: currentX,
								transition: {
									ease: 'easeIn',
								},
							}}
						>
							{selectedDataObject.map((data, i) => (
								<motion.div variants={cardAnimate} key={i}>
									<CardComponent
										type={componentType}
										data={data}
										dataIndex={i}
										totalDataObject={totalDataObject}
									/>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
					{/* {!dragDetected && withinLeftBound && ( */}
					{withinLeftBound && (
						<div
							className='nav-carousel nav-carousel-left'
							onClick={handleScrollLeft}
						>
							<FaChevronLeft size={40} />
						</div>
					)}
					{/* {!dragDetected && withinRightBound && ( */}
					{withinRightBound && (
						<div
							className='nav-carousel nav-carousel-right'
							onClick={handleScrollRight}
						>
							<FaChevronRight size={40} />
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default MainComponent
