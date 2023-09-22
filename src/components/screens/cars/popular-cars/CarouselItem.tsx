import { Box, Button, Link, Typography } from '@mui/material'
import { FC } from 'react'
import BsIcon from '../../../ui/BsIcon'

import { ICar } from '../../../../shared/cars.interface'
import { CartService } from '../../../../services/cart/cart.service'
import { useNavigate } from 'react-router-dom'

const CarouselItem: FC<ICar> = ({
	id,
	make,
	model,
	car_type,
	year,
	seating_capacity,
	fuel_type,
	transmission,
	daily_rate,
	comments,
}) => {
	const carRating = comments.reduce(
		(accumulator, comment) => accumulator + comment.rating,
		0
	)

	const navigate = useNavigate()

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: 'white',
				marginRight: '10px',
				border: '0.1rem solid rgba(0,0,0,.1)',
				boxShadow: '0.5rem 0.5rem 1rem rgba(0,0,0,.1)',
			}}
		>
			<Box sx={{ display: 'flex', position: 'relative' }}>
				<img
					height="250px"
					src={`/images/cars/${make.toLowerCase()}-${model.toLowerCase()}1.jpg`}
					style={{ objectFit: 'cover', width: '100%' }}
					alt=""
				/>
				<Box
					sx={{
						color: 'white',
						position: 'absolute',
						bottom: 0,
						padding: '10px 20px',
					}}
				>
					<Typography variant="caption" sx={{ fontSize: '45px' }}>
						${daily_rate}
						<Typography variant="caption" sx={{ fontSize: '20px' }}>
							/Day
						</Typography>
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					color: 'black',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					padding: '20px',
					gap: 1,
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
					<BsIcon color="red" size={17} name="BsFillStarFill" />
					<BsIcon color="red" size={17} name="BsFillStarFill" />
					<BsIcon color="red" size={17} name="BsFillStarFill" />
					<BsIcon color="red" size={17} name="BsFillStarFill" />
					<BsIcon color="red" size={17} name="BsFillStarFill" />
					<Typography
						variant="caption"
						sx={{ fontSize: '16px', fontWeight: 'bold', marginLeft: '7px' }}
					>
						{carRating / comments.length} ({comments.length})
					</Typography>
				</Box>
				<Link
					variant="h2"
					sx={{
						fontSize: '27px',
						fontWeight: 'bold',
						color: 'black',
						textDecoration: 'none',
						cursor: 'pointer',
						transition: 'color 0.2s linear',
						':hover': {
							color: 'red',
							transition: 'color 0.2s linear',
						},
					}}
					href={`car/${id}`}
				>
					{make} {model}
				</Link>
				<Box
					sx={{
						display: 'flex',
						gap: '1rem',
						flexWrap: 'wrap',
						color: 'gray',
						maxWidth: '26rem',
						margin: '5px 0',
					}}
				>
					<Typography
						variant="h3"
						sx={{
							fontSize: '15px',
							flex: '1 1 6rem',
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
						}}
					>
						<BsIcon color="red" size={14} name="BsFillCarFrontFill" />
						{make}
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontSize: '15px',
							flex: '1 1 6rem',
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
						}}
					>
						<BsIcon color="red" size={14} name="BsFillCarFrontFill" />
						{car_type}
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontSize: '15px',
							flex: '1 1 6rem',
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
						}}
					>
						<BsIcon color="red" size={14} name="BsFillCalendar2DateFill" />
						{year}
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontSize: '15px',
							flex: '1 1 6rem',
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
						}}
					>
						<BsIcon color="red" size={14} name="BsFillPeopleFill" />
						{seating_capacity} seats
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontSize: '15px',
							flex: '1 1 6rem',
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
						}}
					>
						<BsIcon color="red" size={14} name="BsFuelPumpFill" />
						{fuel_type}
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontSize: '15px',
							flex: '1 1 6rem',
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
						}}
					>
						<BsIcon color="red" size={14} name="BsGearWide" />
						{transmission}
					</Typography>
				</Box>
				<Button
					variant="contained"
					sx={{
						padding: '8px 20px',
						borderRadius: 'none',
						fontSize: '16px',
						backgroundColor: 'red',
						transition: 'opacity 0.5s',
						'&:hover': { backgroundColor: 'red', opacity: 0.8 },
					}}
					onClick={() => {
						CartService.addToCart(id)
						navigate('/cart')
					}}
				>
					Rent Car
				</Button>
			</Box>
		</Box>
	)
}
export default CarouselItem
