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
	const [selectedNavMenuItem, setSelectedNavMenuItem] = useState<number>(0)
	const [theme, setTheme] = useState<ThemeType>('dark')
	const [systemThemeEnabled, setSystemThemeEnabled] = useState(false)
	const [mobileMenuBottom, setMobileMenuBottom] = useState(false)
	const [width, setWidth] = useState<number | null>(null)
	const [dragDetected, setDragDetected] = useState(false)

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
		setSelectedNavMenuItem(path.indexOf(pathname))
	}, [pathname])

	const useNavDirection = (): navDirectionType => {
		const { pathname, state } = useLocation()
		const newNavMenuItem = path.indexOf(pathname)
		console.log('useNavDirection', newNavMenuItem, state?.previousPath || '/')
		const prevNavMenuItem = path.indexOf(state?.previousPath || '/')
		console.log('useNavDirection', newNavMenuItem, prevNavMenuItem)

		if (newNavMenuItem > prevNavMenuItem) {
			return 'right'
		} else if (newNavMenuItem < prevNavMenuItem) {
			return 'left'
		}
		return 'right'
	}

	const navDirection = useNavDirection()

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

	const toggleSystemThemeEnabled = () => setSystemThemeEnabled(!systemThemeEnabled)

	const handleDragDetected = () => {
		setDragDetected(true)
	}

	const value = {
		selectedNavMenuItem,
		setSelectedNavMenuItem,
		theme,
		toggleTheme,
		systemThemeEnabled,
		toggleSystemThemeEnabled,
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
