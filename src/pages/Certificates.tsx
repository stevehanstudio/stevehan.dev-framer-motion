import React from 'react'
import MainComponent from '../components/MainComponent'
import AnimatePageTransition from '../components/AnimatePageTransition'

const Certificates = () => {
	return (
		<AnimatePageTransition>
			<div id='certificates'>
				<MainComponent componentType='Certificates' />
			</div>
		</AnimatePageTransition>
	)
}

export default Certificates
