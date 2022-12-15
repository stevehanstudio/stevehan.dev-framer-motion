import { createContext, RefObject } from 'react'
// import { useInView } from 'react-intersection-observer'
// import { createContext, ReactNode, ReactElement, useReducer, useState, useEffect } from 'react'
// import appReducer, { initialState } from './appReducer'
import { ThemeType, navDirectionType } from '../types'

type AppContextType = {
	selectedNavMenuItem: number
	setSelectedNavMenuItem: (navMenuItem: number) => void
	theme: ThemeType
	toggleTheme: () => void
	isMobile: boolean | null
	navDirection: navDirectionType | null
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


