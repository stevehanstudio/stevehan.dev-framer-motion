import { MdOutlineContactMail } from 'react-icons/md'
import { SiAboutdotme } from 'react-icons/si'
import { IoHomeOutline } from 'react-icons/io5'
import { GrProjects, GrCertificate } from 'react-icons/gr'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { MenuItemType } from "../types"
import ResumeIcon from '../components/ResumeIcon'

export const navMenuItems: MenuItemType[] = [
	{
		title: 'Home',
		url: '/',
		icon: IoHomeOutline,
		iconSize: 21,
	},
	{
		title: 'Projects',
		url: '/projects',
		icon: GrProjects,
		iconSize: 19,
		iconClass: 'gr-icon',
	},
	{
		title: 'Certificates',
		url: '/certificates',
		icon: GrCertificate,
		iconSize: 19,
		iconClass: 'gr-icon',
	},
	{
		title: 'About',
		url: '/about',
		icon: SiAboutdotme,
		iconSize: 19,
	},
	{
		title: 'Contact',
		url: '/contact',
		icon: MdOutlineContactMail,
		iconSize: 21,
	},
]

export const socialMenuItems: MenuItemType[] = [
	{
		title: 'My Linkedin Profile',
		url: 'https://www.linkedin.com/in/stevehanstudio',
		icon: BsLinkedin,
		iconSize: 17,
	},
	{
		title: 'My Github Profile',
		url: 'https://www.github.com/stevehanstudio',
		icon: BsGithub,
		iconSize: 17,
	},
	{
		title: 'Open my Resume',
		url: '/resume.pdf',
		icon: ResumeIcon,
		iconSize: 19,
	},
]
