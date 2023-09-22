import { Box, Container, Typography } from '@mui/material'
import CarsCarousel from './cars-carousel/CarsCarousel'

const PopularCars = () => {
	return (
		<Box sx={{ backgroundColor: 'white', padding: '2rem 0' }}>
			<Container
				sx={{
					maxWidth: '90% !important',
					padding: '0 !important',
					justifyContent: 'center',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography
						variant="caption"
						sx={{
							color: 'red',
							fontSize: '20px',
							fontFamily: 'var(--cursive-font)',
						}}
					>
						Our Popular Cars
					</Typography>
					<Typography variant="h2" sx={{ fontSize: '40px', fontWeight: '500' }}>
						Featured Cars
					</Typography>
				</Box>
				<CarsCarousel />
			</Container>
		</Box>
	)
}
export default PopularCars
