import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Menu from "./Menu"
import MobileMenu from './MobileMenu'

const Header = () => {

	const { isMobile } = useContext(AppContext)

	// console.log('In Header isMobile', isMobile)
	return (
		<header className='fixed top-0 left-0 z-50 flex flex-col w-full md:px-4 md:pt-4 md:mx-auto bg-sweetAiran dark:bg-laborWorker md:place-content-center md:fade-bottom'>
			{/* <header className='absolute top-0 left-0 z-10 flex flex-col w-full p-4 mx-auto bg-gray-700 dark:bg-gray-700 place-content-center'> */}
			{ isMobile
				?	<MobileMenu />
				: <Menu	/>
			}
		</header>
	)
}

export default Header