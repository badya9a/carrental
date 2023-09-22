import { FC, useEffect, useState } from 'react'
import { LayoutProps } from './Layout.interface'

import Footer from './footer/Footer'
import NavBar from './Header/NavBar'
import { Box } from '@mui/material'
import BsIcon from '../ui/BsIcon'
import PageTitle from './page-title/PageTitle'

const Layout: FC<LayoutProps> = ({ children }) => {
	const [scrollPosition, setScrollPosition] = useState(0)
	const handleScroll = () => {
		const position = window.pageYOffset
		setScrollPosition(position)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div style={{ backgroundColor: 'black' }}>
			<NavBar active={scrollPosition > 110} />
			{window.location.pathname !== '/' && <PageTitle />}
			{children}
			{scrollPosition > 60 ? (
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						position: 'fixed',
						zIndex: '5',
						bottom: 15,
						right: 15,
						bgcolor: 'red',
						border: '2px solid white',
						cursor: 'pointer',
						opacity: 0.7,
						transition: 'all 0.2s linear',
						':hover': {
							opacity: 1,
							transition: 'all 0.2s linear',
						},
					}}
					onClick={() => window.scrollTo(0, 0)}
				>
					<BsIcon color="white" name="BsArrowUpShort" size={50} />
				</Box>
			) : null}
			<Footer />
		</div>
	)
}
export default Layout
