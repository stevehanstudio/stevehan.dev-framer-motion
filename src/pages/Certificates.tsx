import React from 'react'
import MainComponent from '../components/MainComponent'
import AnimatePageTransition from '../components/AnimatePageTransition'

const Certificates = () => {
	return (
		<AnimatePageTransition>
			<MainComponent componentType='Certificates' />
		</AnimatePageTransition>
	)
}

export default Certificates
