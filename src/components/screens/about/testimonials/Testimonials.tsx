import { Box, Container, Typography } from '@mui/material'
import TestimonialsCarousel from './TestimonialsCarousel'

const Testimonials = () => {
	return (
		<Box
			sx={{
				backgroundColor: 'white',
				padding: '4rem 0',
				background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.7)), url('/images/testimonials-bg.jpg')`,
				backgroundPosition: '50%',
				backgroundSize: 'cover',
				backgroundAttachment: 'fixed',
			}}
		>
			<Container
				sx={{
					maxWidth: '90% !important',
					padding: '0!important',
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
							color: 'white',
							fontSize: '20px',
							fontFamily: 'var(--cursive-font)',
						}}
					>
						What Our Client's Say
					</Typography>
					<Typography
						variant="h2"
						sx={{ fontSize: '50px', fontWeight: '500', color: 'white' }}
					>
						Testimonials
					</Typography>
				</Box>
				<TestimonialsCarousel />
			</Container>
		</Box>
	)
}
export default Testimonials
