import * as React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavList() {
	// This styling will be applied to a <NavLink> when the
	// route that it links to is currently selected.
	let activeStyle = {
		textDecoration: 'underline',
	}

	let activeClassName = 'example-underline'

	return (
		<nav className='pt-[4rem]'>
			<ul>
				<li>
					<NavLink
						to='messages'
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Messages
					</NavLink>
				</li>
				<li>
					<NavLink
						to='tasks'
						className={({ isActive }) =>
							isActive ? activeClassName : undefined
						}
					>
						Tasks 1
					</NavLink>
				</li>
				<li>
					<NavLink to='about'>
					{/* <NavLink to='tasks'> */}
						{({ isActive }) => (
							<span className={isActive ? activeClassName : undefined}>
								Tasks 2
							</span>
						)}
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
