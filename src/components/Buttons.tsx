import React, { useContext } from 'react'
import { BsGithub, BsGlobe2 } from 'react-icons/bs'
import { HiOutlineIdentification } from 'react-icons/hi'
import { MdOutlineCastForEducation } from 'react-icons/md'
import { GrSend } from 'react-icons/gr'
import { AppContext } from '../context/AppContext'

interface Props {
	url: string
}

export const DemoButton: React.FC<Props> = ({ url }) => {
	const { isMobile } = useContext(AppContext)

	return (
		<a className='flex py-2' href={url} target='_blank' rel='noreferrer'>
			<button
				type='button'
				className='card-button md:bg-amber-500 md:dark:text-amber-400 md:border-amber-400 md:hover:bg-amber-400 md:hover:border-amber-400 md:hover:dark:bg-amber-500 md:hover:dark:border-amber-600'
				// className='card-button md:bg-amber-500 md:dark:text-amber-400 md:border-amber-400 md:hover:bg-amber-400 md:hover:border-amber-400 md:hover:bg-transparent'
			>
				<BsGlobe2 className={`${isMobile ? 'fill-amber-500' : ''}`} />
				<span className={`${isMobile ? 'text-amber-500' : ''} pl-2`}>
					Live Website
				</span>
			</button>
		</a>
	)
}

export const DetailsButton: React.FC<Props> = ({ url }) => {
	const { isMobile } = useContext(AppContext)

	return (
		<a className='flex py-2' href={url} target='_blank' rel='noreferrer'>
			<button
				type='button'
				className='card-button md:bg-gradient-to-r from-[rgba(256,256,256,0.05)] to-[rgba(256,256,256,0.1)] md:dark:text-cyan-200 md:dark:border-cyan-200 md:border-cyan-500 md:bg-cyan-500 md:hover:bg-cyan-400 md:hover:border-cyan-400 md:hover:dark:bg-cyan-600 md:hover:dark:border-cyan-700'
			>
				<BsGithub className={`${isMobile ? 'fill-cyan-500' : ''}`} />
				<span className={`${isMobile ? 'text-cyan-500' : ''} pl-2`}>Details</span>
			</button>
		</a>
	)
}

export const CirriculumButton: React.FC<Props> = ({ url }) => {
	const { isMobile } = useContext(AppContext)

	return (
		<a className='flex py-2' href={url} target='_blank' rel='noreferrer'>
			<button className='card-button md:dark:text-lime-200 md:bg-lime-500 md:border-lime-500 md:hover:bg-lime-400 md:hover:border-lime-400 md:hover:dark:bg-lime-600 md:hover:dark:border-lime-700'>
				<MdOutlineCastForEducation className={`${isMobile ? 'fill-lime-500' : ''}`}/>
				<span className={`${isMobile ? 'text-lime-500' : ''} pl-2`}>Cirriculum</span>
			</button>
		</a>
	)
}

export const CourseButton: React.FC<Props> = ({ url }) => {
	const { isMobile } = useContext(AppContext)

	return (
		<a className='flex py-2' href={url} target='_blank' rel='noreferrer'>
			<button className='card-button md:bg-emerald-600 md:border-emerald-600 md:hover:bg-emerald-500 md:hover:border-emerald-500 md:dark:text-emerald-200 md:hover:dark:bg-emerald-700 md:dark:border-emerald-200 md:hover:dark:border-emerald-800'>
				<BsGlobe2 className={`${isMobile ? 'fill-emerald-600' : ''}`} />
				<span className={`${isMobile ? 'text-emerald-600' : ''} pl-2`}>
					Course
				</span>
			</button>
		</a>
	)
}

export const CredentialsButton: React.FC<Props> = ({ url }) => {
	const { isMobile } = useContext(AppContext)

	return (
		<a className='flex py-2' href={url} target='_blank' rel='noreferrer'>
			<button className='md:bg-purple-500 md:border-purple-500 card-button md:hover:bg-purple-400 md:hover:border-purple-400 md:hover:text-white md:hover:dark:bg-purple-600 md:hover:dark:border-purple-700 md:dark:border-purple-300 md:dark:text-purple-300'>
				<HiOutlineIdentification
					className={`${isMobile ? 'fill-purple-600' : ''}`}
				/>
				<span className={`${isMobile ? 'text-purple-600' : ''} pl-2`}>
					Credentials
				</span>
			</button>
		</a>
	)
}

export const SubmitButton = () => (
	<button
		className='flex flex-row items-center justify-center w-full px-4 py-3 mx-auto text-center text-gray-100 hover-text-white dark:text-gray-100 hover:dark:text-white rounded-md bg-healthcareBlue border-2 border-transparent dark:border-gray-800 hover:dark:border-gray-200 hover:border-gray-700 hover:shadow-lg hover:dark:shadow-[0_0_2px_1px_rgba(255,255,255,0.5),0_0_5px_2px_rgba(255,0,255,0.25),0_0_7px_5px_rgba(0,255,255,0.25)]'
		type='submit'
	>
		<GrSend className='mr-2 gr-icon' />
		Submit
	</button>
)

