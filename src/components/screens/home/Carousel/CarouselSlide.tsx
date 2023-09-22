import { Box, Button, Typography } from '@mui/material'
import { FC } from 'react'
import { ISlide } from './carousel.data'
import { useNavigate } from 'react-router-dom'

const CarouselSlide: FC<ISlide> = ({ bgImageLink, caption, title }) => {
	const navigate = useNavigate()

	return (
		<Box
			sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
		>
			<img src={bgImageLink} alt="car" />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					position: 'absolute',
					width: '70%',
					color: 'gray',
					zIndex: 100,
				}}
			>
				<Typography variant="h3" color="white">
					{title}
				</Typography>
				<Typography
					variant="caption"
					color="white"
					fontSize={17}
					sx={{ marginTop: 1.5 }}
				>
					{caption}
				</Typography>
				<Button
					variant="contained"
					sx={{
						fontSize: '15px',
						padding: '20px',
						fontWeight: 'bold',
						marginTop: 2,
						maxWidth: '160px',
						maxHeight: '45px',
						backgroundColor: 'red',
						transition: 'opacity 0.5s',
						'&:hover': { backgroundColor: 'red', opacity: 0.85 },
					}}
					onClick={() => navigate('/cars')}
				>
					Learn More
				</Button>
			</Box>
		</Box>
	)
}
export default CarouselSlide
