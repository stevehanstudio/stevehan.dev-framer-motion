import React, { useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './styles/global.scss'
import Header from './components/Header'
import Settings from './components/Settings'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
// import { AppProvider } from './context/AppContextProvider'
import './styles/global.scss'
import { AppContext } from './context/AppContext'

const App = () => {
	const location = useLocation()
	const { theme, isMobile } = useContext(AppContext)

	// console.log('App location', location)

	return (
		<motion.div
			// initial={{
			// 	backgroundPosition: theme === 'dark' ? 'bg-left' : 'bg-right',
			// }}
			// animate={{
			// 	backgroundPosition: theme === 'dark' ? 'bg-left' : 'bg-right',
			// }}
			// transition={{
			// 	backgroundPosition: {
			// 		duration: 4.5,
			// 		delay: 1.5,
			// 	},
			// }}
			className={`${
				theme === 'dark' ? 'bg-left animation-bg-light-to-dark' : 'bg-right animation-bg-dark-to-light'
			} background-gradient min-h-[100vh] h-full`}
		>
			<Header />
			<AnimatePresence>
				{/* <AnimatePresence mode='wait'> */}
				<Routes location={location} key={location.pathname}>
					<Route id='home' path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/certificates' element={<Certificates />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</AnimatePresence>
			{isMobile && <Settings />}
		</motion.div>
	)
}

export default App