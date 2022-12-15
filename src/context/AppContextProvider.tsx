import {
	ReactNode,
	ReactElement,
	useState,
	useEffect,
	useRef,
} from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeType, navDirectionType } from '../types'
import { AppContext } from './AppContext'
import { path } from '../constants/misc'

export const AppProvider = ({
	children,
}: {
	children: ReactNode
}): ReactElement => {
	// const [state, dispatch] = useReducer(appReducer, initialState)
	const [selectedNavMenuItem, setSelectedNavMenuItem] = useState<number>(0)
	const [theme, setTheme] = useState<ThemeType>('dark')
	const [mobileMenuBottom, setMobileMenuBottom] = useState(false)
	const [width, setWidth] = useState<number | null>(null)
	const [dragDetected, setDragDetected] = useState(false)
	const [navDirection, setNavDirection] = useState<navDirectionType | null>(null)

	const isMobile = width && width <= 768 ? true : false

	const { pathname } = useLocation()

	const prevNavMenuItemRef = useRef(0)

	const heroRef = useRef(null)
	const projectsRef = useRef(null)
	const certificatesRef = useRef(null)
	const aboutRef = useRef(null)
	const contactRef = useRef(null)

	const toggleMobileMenuBottom = () => {
		setMobileMenuBottom(!mobileMenuBottom)
	}

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
		const newNavMenuItem = path.indexOf(pathname)
		if (newNavMenuItem > prevNavMenuItemRef.current) {
			setNavDirection('right')
			prevNavMenuItemRef.current = newNavMenuItem
		} else if (newNavMenuItem !== prevNavMenuItemRef.current) {
			setNavDirection('left')
			prevNavMenuItemRef.current = newNavMenuItem
		}
		setSelectedNavMenuItem(newNavMenuItem)
		// setSelectedNavMenuItem(path.indexOf(pathname))
	}, [pathname])

	// useEffect(() => {
	// 	// console.log(
	// 	// 	`prevNavMenuItemRef.current=${prevNavMenuItemRef.current}, selectedNavMenuItem=${selectedNavMenuItem}, navDirection=${navDirection}`
	// 	// )

	// 	if (selectedNavMenuItem > prevNavMenuItemRef.current) {
	// 		setNavDirection('right')
	// 		prevNavMenuItemRef.current = selectedNavMenuItem
	// 	} else if (selectedNavMenuItem !== prevNavMenuItemRef.current) {
	// 		setNavDirection('left')
	// 		prevNavMenuItemRef.current = selectedNavMenuItem
	// 	}
	// }, [selectedNavMenuItem])

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
			const isBrowserDefaultDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches
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
		mobileMenuBottom,
		toggleMobileMenuBottom,
		navDirection,
		heroRef,
		projectsRef,
		certificatesRef,
		aboutRef,
		contactRef,
		dragDetected,
		handleDragDetected,
	}

	// console.log('AppContext', theme, width, isMobile)
		console.log(
			`prevNavMenuItemRef.current=${prevNavMenuItemRef.current}, selectedNavMenuItem=${selectedNavMenuItem}, navDirection=${navDirection}`
		)

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
