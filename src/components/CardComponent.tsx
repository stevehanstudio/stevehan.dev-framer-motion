import React from 'react'
// import Image from 'next/image'
import {
	DetailsButton,
	DemoButton,
	CirriculumButton,
	CourseButton,
	CredentialsButton,
} from './Buttons'
import { MainComponentType, DataType } from '../types'

interface Props {
  type: MainComponentType
	data: DataType
	dataIndex: number
	totalDataObject: number
}

const CardComponent: React.FC<Props> = ({
  type,
  data,
	dataIndex,
	totalDataObject,
}) => {
	return (
		<article className='card-component'>
			<div className='flex-col'>
				<h4 className='px-1 pt-2 pb-1 text-sm font-semibold text-gray-500 md:pt-3 md:pb-2 dark:text-gray-300'>
					{type}
					{` ${dataIndex + 1} of ${totalDataObject}`}
				</h4>
				<div className='relative object-contain overflow-hidden border-2 border-gray-50 dark:border-gray-700 rounded-sm shadow-sm pointer-events-none h-auto md:w-[350px] md:h-[225px]'>
					<img
						alt={data.title}
						src={data.image}
						sizes='(max-width: 350px)'
						// placeholder='blur'
						// width={350}
						// height={200}
						// fill
					/>
				</div>
			</div>
			<div className='flex flex-col flex-[1-0-auto] h-full flex-stretch py-3 md:py-7 px-3 md:px-7'>
				<h1 className='font-semibold text-center text:base md:text-lg dark:text-white'>
					{data.title}
				</h1>
				<h2 className='py-2 text-xs font-light md:text-sm dark:text-gray-100'>
					{data.subtitle}
				</h2>
				{/* <div className='flex flex-row justify-end h-full mx-5 space-between'> */}
				<div className='flex flex-row justify-between w-full h-full'>
					{data.website && <DemoButton url={data.website} />}
					{data.github && <DetailsButton url={data.github} />}
					{data.curriculum && <CirriculumButton url={data.curriculum} />}
					{data.course && <CourseButton url={data.course} />}
					{data.credentials && (
						<CredentialsButton url={data.credentials} />
					)}
				</div>
			</div>
		</article>
	)
}

export default CardComponent
