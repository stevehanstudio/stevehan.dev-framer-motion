import React, { useContext } from 'react'
// import { InView } from 'react-intersection-observer'
// import { useForm, SubmitHandler } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'
import { SubmitButton } from '../components/Buttons'
import { AppContext } from '../context/AppContext'
import AnimatePageTransition from '../components/AnimatePageTransition'

// type FormData = {
// 	name: string
// 	email: string
// 	subject: string
// 	message: string
// }

// const schema = yup.object().shape({
// 	name: yup.string().required(),
// 	email: yup.string().required().email(),
// 	subject: yup.string().required(),
// 	message: yup.string().required(),
// })

const Contact = () => {
	// const {
	// 	register,
	// 	handleSubmit,
	// 	formState: { errors },
	// } = useForm<FormData>({
	// 	resolver: yupResolver(schema),
	// })

	// const { isMobile, selectedNavMenuItem, setSelectedNavMenuItem } =
	const { isMobile, mobileMenuBottom } = useContext(AppContext)

	// const handleInView = (inView: boolean) => {
	// 	if (inView === true && selectedNavMenuItem !== 4) {
	// 		setSelectedNavMenuItem(4)
	// 	}
	// }

	// const handleSubmit = (event:SyntheticEvent) => {
	// 	event.preventDefault()
	// 	const myForm = event.target
	// 	const formData = new FormData(myForm)

	// 	fetch('/', {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	// 			body: new URLSearchParams(formData).toString(),
	// 			// body: JSON.stringify(data),
	// 		})
	// 		.then(() => {
	// 			console.log('Form successful submitted');

	// 			// return response.json()
	// 		})
	// 		// .then(d => {
	// 		// 	console.log('Success:', d)
	// 		// })
	// 		.catch(error => {
	// 			console.log('Error:', error)
	// 		})
	// }

	return (
		// <InView
		// 	as='div'
		// 	threshold={0.4}
		// 	className='flex flex-col h-full'
		// 	onChange={(inView, entry) => handleInView(inView)}
		// >
		<AnimatePageTransition>
			<div
				id='contact'
				className={`max-w-md mx-auto section bg-blur-md ${
					isMobile && mobileMenuBottom
						? 'mt-0 pt-3 pb-5 mb-5'
						: ''
				}`}
			>
				<h2 className='section-title'>Contact</h2>
				{/* <h3 className='text-2xl text-red-800 dark:text-red-400'>Let's Get in Touch!</h3> */}
				<form
					name='SteveHan.dev Contact Form'
					method='post'
					// data-netlify='true'
					// netlify-honeypot='bot-field'
					className='px-[1.2em] md:px-0'
					// onSubmit={handleSubmit}
				>
					<input
						type='hidden'
						name='form-name'
						value='SteveHan.dev Contact Form'
					/>
					<div className='fields'>
						<label htmlFor='name'>Name</label>
						<input id='name' type='text' name='name' required />
						{/* <p>{errors.name?.message}</p> */}
					</div>
					<div className='fields'>
						<label htmlFor='email'>Email</label>
						<input id='email' type='email' name='email' required />
						{/* <p>{errors.email?.message}</p> */}
					</div>
					<div className='fields'>
						<label htmlFor='subject'>Subject</label>
						<input id='subject' type='text' name='subject' required />
						{/* <p>{errors.subject?.message}</p> */}
					</div>
					<div className='fields'>
						<label htmlFor='message'>Message</label>
						<textarea
							id='message'
							name='message'
							rows={isMobile ? 5 : 8}
							required
						/>
						{/* <p>{errors.message?.message}</p> */}
					</div>
					<div className='pt-4 fields'>
						{/* <input type='submit' className='button' /> */}
						<SubmitButton />
					</div>
				</form>
			</div>
		</AnimatePageTransition>
	)
}

export default Contact
