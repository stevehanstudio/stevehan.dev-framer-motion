import React from 'react'
import MainComponent from '../components/MainComponent'
import AnimatePageTransition from '../components/AnimatePageTransition'

const page = () => {
	return (
		<AnimatePageTransition>
			<div id='projects'>
				<MainComponent componentType='Projects' />
			</div>
		</AnimatePageTransition>
	)
}

export default page
