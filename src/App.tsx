import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './styles/global.scss'
import Header from './components/Header'
import About from './pages/About'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { AppProvider } from './context/AppContext'
import './styles/global.scss'

const App = () => {
	const location = useLocation()

	return (
		<AppProvider>
			<Header />
			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/certificates' element={<Certificates />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</AnimatePresence>
		</AppProvider>
	)
}

export default App