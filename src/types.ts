import { IconType } from 'react-icons'
import { IconProps } from './components/ResumeIcon'

export type DataType = {
	title: string
	subtitle: string
	slug?: string
	image: string
	screenshot: string
	date?: string
	author?: string
	skills: string[]
	website?: string
	github?: string
	curriculum?: string
	course?: string
	credentials?: string
}

export type SkillType = {
	selected: boolean
	skill: string
}

export type MainComponentType = 'Projects' | 'Certificates' | undefined

// export enum ActiveMenuType {
// 	Home,
// 	Projects,
// 	Certificates,
// 	About,
// 	Contact,
// }

// export enum ActivePageType {
// 	Home,
// 	Projects,
// 	Certificates,
// 	About,
// 	Contact,
// }

// export enum ActionType {
// 	SetHomePage,
// 	SetProjectsPage,
// 	SetrtificatesPage,
// 	SetAboutPage,
// 	SetContactPage,
// 	SetPreviousPage,
// 	SetNextPage,
// 	ToggleDarkMode,
// }

// export type ActionPayloadType = {
// 	newWidth?: number
// }

export type navDirectionType = 'left' | 'right'

export type ThemeType = 'dark' | 'light'

export interface MenuItemType {
	title: string
	url: string
	icon: IconType | React.FC<IconProps>
	iconClass?: string
	iconSize?: number
	// clickAction?: ActiveMenuType
}

export interface MixpanelEventType {
	title?: String
	isMobile?: boolean | null
	theme?: ThemeType,
	mainComponentType?: MainComponentType
	buttonName?: String
	currentPath?: String
	nextPath?: String
	width?: Number
}