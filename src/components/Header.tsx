import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Menu from "./Menu"
import MobileMenu from './MobileMenu'

const Header = () => {
	const { theme, isMobile, mobileMenuBottom } = useContext(AppContext)

	// console.log('In Header isMobile', isMobile, mobileMenuBottom)

	return (
		<header
			className={`header
			${
				theme === 'dark'
					? 'bg-left animation-bg-light-to-dark'
					: 'bg-right animation-bg-dark-to-light'
			} background-gradient
			${isMobile && mobileMenuBottom ? 'bottom-0' : 'top-0'}`}
		>
			{isMobile ? <MobileMenu /> : <Menu />}
		</header>
	)
}

export default Header