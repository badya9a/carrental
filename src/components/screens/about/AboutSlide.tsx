import { Box, Button, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const AboutSlide = () => {
	const navigate = useNavigate()

	return (
		<Box sx={{ backgroundColor: 'white', padding: '3rem 0 !important' }}>
			<Container
				sx={{
					maxWidth: '90% !important',
					display: 'flex',
					flexWrap: 'wrap',
					position: 'relative',
					padding: '0px !important',
					minHeight: '80vh',
				}}
			>
				<img
					src="images/about-slide-bg.jpg"
					alt="car"
					style={{
						position: 'absolute',
						width: '100%',
						height: '80vh',
						objectFit: 'cover',
					}}
				/>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						padding: '2rem 4rem 2rem 15rem',
						flexWrap: 'wrap',
						height: '100%',
						maxWidth: '800px',
						backgroundColor: 'rgba(255, 0, 0, 0.75)',
						position: 'absolute',
						right: 0,
						top: 0,
						clipPath: 'polygon(0 0,100% 0,100% 100%,20% 100%)',
					}}
				>
					<Box>
						<Typography variant="h6" color={'white'}>
							Know About Us
						</Typography>
						<Typography variant="h3" color={'white'} fontWeight={'bold'}>
							We Make Your Drive Memorable.
						</Typography>
						<Typography variant="caption" fontSize={16} color={'white'}>
							Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Illum
							Iusto Minima Quo, Recusandae Perspiciatis Aspernatur, Rerum
							Tempora Vitae Aperiam Enim, Dicta Maxime? Eum Repellat Velit
							Perspiciatis Eligendi Rerum Voluptate Repellendus.
						</Typography>
						<Button
							variant="contained"
							type="button"
							sx={{
								backgroundColor: 'red',
								border: '2px solid white',
								marginTop: '15px',
							}}
							onClick={() => navigate('/cars')}
						>
							Discover More
						</Button>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}
export default AboutSlide
