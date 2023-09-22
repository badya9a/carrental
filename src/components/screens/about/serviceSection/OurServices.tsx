import { Box, Container, Typography } from '@mui/material'
import { serviceData } from './services.data'
import ServiceItem from './ServiceItem'

const OurServices = () => {
	return (
		<Box sx={{ backgroundColor: 'white', padding: '2rem 0' }}>
			<Container sx={{ maxWidth: '90% !important', padding: '0 !important' }}>
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
						What We Offer
					</Typography>
					<Typography variant="h2" sx={{ fontSize: '40px', fontWeight: '500' }}>
						Our Services
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: 3,
						marginTop: '20px',
					}}
				>
					{serviceData.map((link, index) => (
						<ServiceItem {...link} key={index} />
					))}
				</Box>
			</Container>
		</Box>
	)
}
export default OurServices
