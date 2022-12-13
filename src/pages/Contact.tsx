import React, { useContext } from 'react'
// import { InView } from 'react-intersection-observer'
// import { useForm, SubmitHandler } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'
import { GrSend } from 'react-icons/gr'
import { AppContext } from '../context/AppContext'
import PageWrapper from '../PageWrapper'

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
	const { isMobile } =
		useContext(AppContext)

	// const handleInView = (inView: boolean) => {
	// 	if (inView === true && selectedNavMenuItem !== 4) {
	// 		setSelectedNavMenuItem(4)
	// 	}
	// }

	// const onSubmit: SubmitHandler<FormData> = data => {
	// 	console.log(data)
	// 	fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(data),
	// 	})
	// 		.then(response => {
	// 			return response.json()
	// 		})
	// 		.then(d => {
	// 			console.log('Success:', d)
	// 		})
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
		<PageWrapper>
			<div className='max-w-md mx-auto section'>
				<h2 className='section-title'>Contact</h2>
				{/* <h3>Let's Get in Touch!</h3> */}
				<form
					name='contact v1'
					method='POST'
					data-netlify='true'
					className='px-[1.2em] md:px-0'
					// onSubmit='submit'
					// onSubmit={handleSubmit(onSubmit)}
				>
					<input type='hidden' name='form-name' value='contact v1' />
					<div className='fields'>
						<label htmlFor='name'>Name</label>
						<input id='name' type='text' name='name' />
						{/* <p>{errors.name?.message}</p> */}
					</div>
					<div className='fields'>
						<label htmlFor='email'>Email</label>
						<input id='email' type='text' name='email' />
						{/* <p>{errors.email?.message}</p> */}
					</div>
					<div className='fields'>
						<label htmlFor='subject'>Subject</label>
						<input id='subject' type='text' name='subject' />
						{/* <p>{errors.subject?.message}</p> */}
					</div>
					<div className='fields'>
						<label htmlFor='message'>Message</label>
						<textarea id='message' name='message' rows={isMobile ? 5 : 8} />
						{/* <p>{errors.message?.message}</p> */}
					</div>
					<div className='pt-4 fields'>
						{/* <input type='submit' className='button' /> */}
						<button
							className='flex flex-row items-center justify-center w-full px-4 py-3 mx-auto text-center text-white rounded-md bg-healthcareBlue'
							type='submit'
						>
							<GrSend className='mr-2 gr-icon' />
							Submit
						</button>
					</div>
				</form>
			</div>
		</PageWrapper>
	)
}

export default Contact
