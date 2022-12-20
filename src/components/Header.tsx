import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Menu from "./Menu"
import MobileMenu from './MobileMenu'

const Header = () => {
	const { isMobile, mobileMenuBottom } = useContext(AppContext)

	// console.log('In Header isMobile', isMobile, mobileMenuBottom)
	return (
		<header className={`header
			${isMobile && mobileMenuBottom ? 'bottom-0' : 'top-0'}`}
		>
			{ isMobile
				?	<MobileMenu />
				: <Menu	/>
			}
		</header>
	)
}

export default Header