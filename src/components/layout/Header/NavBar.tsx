import { FC, useEffect, useState } from 'react'
import Header1 from './Header1'
import Header2 from './Header2'

const NavBar: FC<{ active: boolean }> = ({ active }) => {
	return (
		<nav
			style={{
				position: 'fixed',
				top: 0,
				zIndex: 100,
				left: '50%',
				transform: 'translate(-50%, 0)',
				width: '100%',
			}}
		>
			<Header1 active={active} />
			<Header2 active={active} />
		</nav>
	)
}
export default NavBar
