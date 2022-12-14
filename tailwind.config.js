/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				contactBackground:
					"url('https://res.cloudinary.com/dbrvquuei/image/upload/c_scale,w_auto/f_auto/dpr_auto/v1670993328/stevehandev/images/joshua-sortino-LqKhnDzSF-8-unsplash_1_yp7r1a.jpg')",
				// sweetAiran: 'linear-gradient(to right bottom, #D7E1EC, #FFFFFF)',
				sweetAiran: 'linear-gradient(to right, #D7E1EC, #F1F1F1)',
				signOfIntelligence:
					'linear-gradient(to right bottom, #FFFCFF, #D5FEFD',
				deepWater: 'linear-gradient(to right bottom, #04619F, #000000)',
				laborWorker: 'linear-gradient(to right, #2C3E50, #000000)',
				calmCelebration:
					'linear-gradient(to right bottom, #09203F, #537895)',
				whaleHouse: 'linear-gradient(to right bottom, #09203F, #537895)',
				nightShift: 'linear-gradient(to right bottom, #12100E, #2B4162)',
			},
			colors: {
				healthcareBlue: '#4294ee',
				laborWorkerBlue: '#2C3E50',
				sunYellow: '#f8f765',
				// sunYellow: '#fbfaa1',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
