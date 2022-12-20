import React from 'react'
import MainComponent from '../components/MainComponent'
import AnimatePageTransition from '../components/AnimatePageTransition'

const page = () => {
	return (
		<AnimatePageTransition>
			<MainComponent componentType='Projects' />
		</AnimatePageTransition>
	)
}

export default page
