import { Box, Button, Container, Link } from '@mui/material'
import { headerLinks } from './Header2.data'
import Logo from '../../ui/Logo'
import { FC } from 'react'

const Header2: FC<{ active: boolean }> = ({ active }) => {
	return (
		<Box
			sx={{
				background: `${active ? 'black' : 'none'}`,
				transition: 'all 0.2s linear',
			}}
		>
			<Container
				sx={{
					height: '70px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					maxWidth: '90vw !important',
				}}
			>
				<Logo />
				<Box sx={{ display: 'flex', gap: '2rem' }}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-around',
							gap: '1.8rem',
						}}
					>
						{headerLinks.map((link, index) => (
							<Link
								key={index}
								href={link.path}
								sx={{
									fontSize: '1.2rem',
									color: 'white',
									transition: 'color 0.6s',
									'&:hover': {
										color: 'red',
									},
									textDecoration: 'none',
								}}
							>
								{link.title}
							</Link>
						))}
					</Box>
					<Link href="/cars">
						<Button
							variant="contained"
							sx={{
								fontWeight: 'bold',
								backgroundColor: 'red',
								transition: 'opacity 0.5s',
								borderRadius: '0',
								'&:hover': { backgroundColor: 'red', opacity: 0.7 },
							}}
						>
							Rent Car
						</Button>
					</Link>
				</Box>
			</Container>
		</Box>
	)
}
export default Header2
