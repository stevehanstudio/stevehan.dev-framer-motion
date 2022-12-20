import React, { useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './styles/global.scss'
import Header from './components/Header'
import Settings from './components/Settings'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import About from './pages/About'
import Contact from './pages/Contact'
import Test from './pages/Test'
import NotFound from './pages/NotFound'
// import { AppProvider } from './context/AppContextProvider'
import './styles/global.scss'
import { AppContext } from './context/AppContext'

const App = () => {
	const location = useLocation()
	const { isMobile } = useContext(AppContext)

	console.log('App location', location)

	return (
		<>
			<Header />
			<AnimatePresence>
				{/* <AnimatePresence mode='wait'> */}
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/certificates' element={<Certificates />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/test' element={<Test />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</AnimatePresence>
			{isMobile && <Settings />}
		</>
	)
}

export default App