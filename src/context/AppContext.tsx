import { createContext, ReactNode, ReactElement, useState, useEffect, useRef, RefObject } from 'react'
import { useLocation } from 'react-router-dom'
// import { useInView } from 'react-intersection-observer'
// import { createContext, ReactNode, ReactElement, useReducer, useState, useEffect } from 'react'
// import appReducer, { initialState } from './appReducer'
import { ThemeType } from '../types'

export type AppContextType = {
	selectedNavMenuItem: number
	setSelectedNavMenuItem: (navMenuItem: number) => void
	theme: ThemeType
	toggleTheme: () => void
	isMobile: boolean | null
	heroRef: RefObject<HTMLDivElement> | null
	projectsRef: RefObject<HTMLDivElement> | null
	certificatesRef: RefObject<HTMLDivElement> | null
	aboutRef: RefObject<HTMLDivElement> | null
	contactRef: RefObject<HTMLDivElement> | null
	dragDetected: boolean
	handleDragDetected: () => void
}

export const AppContext = createContext<AppContextType>({} as AppContextType)
// export const AppContext = createContext<AppContextType | null>(null)

const path = ['/', '/projects', '/certificates', '/about', '/contact']

export const AppProvider = ({ children }: { children: ReactNode }): ReactElement => {
	// const [state, dispatch] = useReducer(appReducer, initialState)
	const [selectedNavMenuItem, setSelectedNavMenuItem] = useState<number>(0)
	const [theme, setTheme] = useState<ThemeType>('dark')
	const [width, setWidth] = useState<number | null>(null)
	const [dragDetected, setDragDetected] = useState(false)

	const isMobile = width && width <= 768 ? true : false

	const { pathname } = useLocation()

	const heroRef = useRef(null)
	const projectsRef = useRef(null)
	const certificatesRef = useRef(null)
	const aboutRef = useRef(null)
	const contactRef = useRef(null)

	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth)
	}

	useEffect(() => {
		setWidth(window.innerWidth)
		window.addEventListener('resize', handleWindowSizeChange)
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange)
		}
	}, [])

	useEffect(() => {
		setSelectedNavMenuItem(path.indexOf(pathname))
	}, [pathname])

	const handleMobileThemeColor = (e: MediaQueryListEvent) => {
		const colorScheme = e.matches ? 'dark' : 'light'
		// console.log(colorScheme)

		if (colorScheme === 'dark') {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}

	useEffect(() => {
		if (isMobile) {
			const isBrowserDefaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
			// console.log(
			// 	`isMobile=${isMobile}, isBrowserDefaultDark=${isBrowserDefaultDark}`
			// )
			if (isBrowserDefaultDark) {
				setTheme('dark')
			} else {
				setTheme('light')
			}
			window
				.matchMedia('(prefers-color-scheme: dark)')
				.addEventListener('change', handleMobileThemeColor)
			return () => {
				window
					.matchMedia('(prefers-color-scheme: dark)')
					.removeEventListener('change', handleMobileThemeColor)
			}
		}
	}, [isMobile])

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	const toggleTheme = () => {
		if (theme === 'dark') {
			setTheme('light')
		} else {
			setTheme('dark')
		}
	}

	const handleDragDetected = () => {
		setDragDetected(true)
	}

	const value = {
		selectedNavMenuItem,
		setSelectedNavMenuItem,
		theme,
		toggleTheme,
		isMobile,
		heroRef,
		projectsRef,
		certificatesRef,
		aboutRef,
		contactRef,
		dragDetected,
		handleDragDetected
	}

	// console.log('AppContext', theme, width, isMobile)

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}