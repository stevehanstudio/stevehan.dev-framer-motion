import React from 'react'
import { BsGithub, BsGlobe2 } from 'react-icons/bs'
import { HiOutlineIdentification } from 'react-icons/hi'
import { MdOutlineCastForEducation } from 'react-icons/md'

interface Props {
	url: string
}

export const DemoButton: React.FC<Props> = ({ url }) => {
	return (
		<a className='flex py-2' href={url} target='_blank' rel='noreferrer'>
			<button
				type='button'
				className='card-button bg-amber-500 dark:text-amber-400 border-amber-400 hover:bg-amber-400 hover:border-amber-400 hover:dark:bg-amber-800 hover:dark:border-amber-800'
			>
				<BsGlobe2 />
				<span className='pl-2'>Demo</span>
			</button>
		</a>
	)
}

export const DetailsButton: React.FC<Props> = ({ url }) => {
	return (
		<a className='flex py-2' href={url} target='_blank' rel='noreferrer'>
			<button
				type='button'
				className='card-button bg-gradient-to-r from-[rgba(256,256,256,0.05)] to-[rgba(256,256,256,0.1)] dark:text-cyan-200 dark:border-cyan-200 border-cyan-500 bg-cyan-500 hover:bg-cyan-400 hover:border-cyan-400 hover:dark:bg-cyan-800 hover:dark:border-cyan-800'
			>
				<BsGithub />
				<span className='pl-2'>Details</span>
			</button>
		</a>
	)
}

export const CirriculumButton: React.FC<Props> = ({ url }) => {
	return (
		<a className='flex py-2' href={url} target='_blank' rel='noreferrer'>
			<button className='card-button dark:text-lime-200 bg-lime-500 border-lime-500 hover:bg-lime-400 hover:border-lime-400 hover:dark:bg-lime-700 hover:dark:border-lime-700'>
				<MdOutlineCastForEducation />
				<span className='pl-1 md:pl-2'>Cirriculum</span>
			</button>
		</a>
	)
}

export const CourseButton: React.FC<Props> = ({ url }) => {
	return (
		<a className='flex py-2' href={url} target='_blank' rel='noreferrer'>
			<button className='card-button bg-emerald-600 border-emerald-600 hover:bg-emerald-500 hover:border-emerald-500 dark:text-emerald-200 hover:dark:bg-emerald-700 dark:border-emerald-200 hover:dark:border-emerald-700'>
				<BsGlobe2 />
				<span className='pl-1 md:pl-2'>Course</span>
			</button>
		</a>
	)
}

export const CredentialsButton: React.FC<Props> = ({ url }) => {
	return (
		<a className='flex py-2' href={url} target='_blank' rel='noreferrer'>
			<button className='bg-purple-500 border-purple-500 card-button hover:bg-purple-400 hover:border-purple-400 hover:text-white hover:dark:bg-purple-600 hover:dark:border-purple-600 dark:border-purple-300 dark:text-purple-300'>
				<HiOutlineIdentification />
				<span className='pl-1 md:pl-2'>Credentials</span>
			</button>
		</a>
	)
}

// interface ExpandProps {
// 	showAll: boolean
// 	handleClick: (e: MouseEvent) => void
// }

