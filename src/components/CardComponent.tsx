import React, { useContext } from 'react'
// import Image from 'next/image'
import {
	DetailsButton,
	DemoButton,
	CirriculumButton,
	CourseButton,
	CredentialsButton,
} from './Buttons'
import { MainComponentType, DataType } from '../types'
import { AppContext } from '../context/AppContext'

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
	const { isMobile } = useContext(AppContext)

	return (
		<article className='card-component'>
			<div className='flex-col'>
				{!isMobile && (
					<h4 className='px-6 pt-2 text-sm font-medium text-gray-500 md:pt-3 dark:text-gray-300'>
						{type?.slice(0, -1)}
						{` ${dataIndex + 1} of ${totalDataObject}`}
					</h4>
				)}
				<div className='relative object-contain overflow-hidden mx-6 mt-6 md:mt-0 md:border-2 border-gray-50 dark:border-gray-800 rounded-sm shadow-sm pointer-events-none h-auto md:w-[325px] md:h-[200px]'>
					<img
						alt={data.title}
						src={data.image}
						sizes='(max-width: 325px)'
						// className='object-cover'
						// placeholder='blur'
						// width={350}
						// height={200}
						// fill
					/>
				</div>
			</div>
			<div className='flex flex-col flex-[1-0-auto] h-full flex-stretch py-0 md:pt-7 md:pb-7 px-6 md:px-7'>
				{isMobile && (
					<h4 className='pt-4 text-xs font-normal leading-none text-gray-500 dark:text-gray-300'>
						{type?.slice(0, -1)}
						{` ${dataIndex + 1} of ${totalDataObject}`}
					</h4>
				)}
				<h1 className='font-normal md:font-medium md:text-center leading-none text-xl md:text-lg dark:text-white'>
					{data.title}
				</h1>
				<h2 className='py-2 text-sm font-light md:text-sm dark:text-gray-100'>
					{data.subtitle}
				</h2>
				{/* <div className='flex flex-row justify-end h-full mx-5 space-between'> */}
				<div className='flex flex-row mb-4 md:mb-0 justify-between w-full h-full'>
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
