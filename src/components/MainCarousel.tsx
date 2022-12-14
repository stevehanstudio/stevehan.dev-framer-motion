import React, { useState, useEffect, useRef, useContext, KeyboardEvent } from 'react'
import { motion, Variants } from 'framer-motion'
// import { InView } from 'react-intersection-observer'
// import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
// import AnimateHeight from 'react-animate-height'
import CardComponent from './CardComponent'
import { DataType, MainComponentType } from '../types'
// import CarouselOverlay from './CarouselOverlay'
import { AppContext } from '../context/AppContext'

interface Props {
  componentType: MainComponentType
	dataObject: DataType[] | []
	selectedDataObject: DataType[] | []
	selectedSkills: string[]
}

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

const MainCarousel:React.FC<Props> = ({ componentType, dataObject, selectedDataObject, selectedSkills }) => {
	const [width, setWidth] = useState(0)
	const [currentX, setCurrentX] = useState(0)
	const carousel = useRef<HTMLDivElement | null>(null)
	const totalDataObject = selectedDataObject.length
	const withinLeftBound = currentX < 0
	const withinRightBound = currentX > -width

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

	// const handleAnimationComplete = () => {
	// 	// console.log(event, info.offset.x, info.point.x)
	// 	console.log(
	// 		`handleAnimationComplete:	currentX=${currentX}, carousel.current?.clientWidth=${carousel.current?.clientWidth}`
	// 		// carouselMeasureRef
	// 	)
	// }

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

  return (
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
					// onAnimationComplete={handleAnimationComplete}
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
  )
}

export default MainCarousel