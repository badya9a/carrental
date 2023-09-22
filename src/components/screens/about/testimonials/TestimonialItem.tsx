import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { ITestimonial } from './testimonials.data'
import BsIcon from '../../../ui/BsIcon'

const TestimonialItem: FC<ITestimonial> = ({ fullname, photoLink }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				position: 'relative',
				alignItems: 'center',
				padding: '10rem 2rem 2rem',
				bgcolor: 'white',
				marginRight: '20px',
				textAlign: 'center',
			}}
		>
			<img
				src={photoLink}
				alt="person"
				style={{
					borderRadius: '50%',
					objectFit: 'cover',
					height: '8rem',
					width: '8rem',
					outline: '0.2rem solid white',
					outlineOffset: '-0.5rem',
					position: 'absolute',
					top: '17%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			/>
			<Box>
				<BsIcon name="BsQuote" color="red" size={100} />
			</Box>

			<Typography
				variant="caption"
				sx={{
					fontSize: '15px',
				}}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere
				libero similique illo suscipit dolores aliquam repudiandae numquam totam
				aspernatur enim facilis ex officia autem minus impedit, accusamus,
				voluptatibus sed!
			</Typography>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					marginTop: '20px',
				}}
			>
				<Typography variant="h4" sx={{ fontSize: '22px' }}>
					{fullname}
				</Typography>
				<Typography variant="h6" sx={{ color: 'red' }}>
					Customer
				</Typography>
			</Box>
		</Box>
	)
}
export default TestimonialItem
