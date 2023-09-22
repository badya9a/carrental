import { Box, Button, Container, Link, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useNavigation, useParams } from 'react-router-dom'

import { CarService } from '../../../../services/cars.service'
import BsIcon from '../../../ui/BsIcon'
import { GiFuelTank } from 'react-icons/gi'

import DescriptionSection from './DescriptionSection'
import CarsCarousel from '../popular-cars/cars-carousel/CarsCarousel'
import { useEffect } from 'react'

type Params = {
	id: string
}

const SingleCar = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [window.location.pathname])

	const { id } = useParams<keyof Params>() as Params

	const { data: car } = useQuery(['get car', id], () => CarService.getAll(), {
		select: ({ data }) => data.cars.find((car) => car.id === +id),
	})

	const carRating = car?.comments.reduce(
		(accumulator, comment) => accumulator + comment.rating,
		0
	)

	return (
		<Box sx={{ bgcolor: 'white', marginTop: '5rem' }}>
			<Container
				sx={{
					maxWidth: '90% !important',
					padding: '2rem 0 !important',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						padding: '2rem',
						marginBottom: '2rem',
						boxShadow: '0 0.5rem 1rem rgba(0,0,0,.1)',
					}}
				>
					<Box sx={{ display: 'flex', gap: '3rem' }}>
						<Box sx={{ display: 'flex', flex: '1 1 35rem' }}>
							<img
								style={{ width: '100%' }}
								src={`/images/cars/${car?.make}-${car?.model}1.jpg`}
								alt={`${car?.make}${car?.model}`}
							/>
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								flex: '1 1 40rem',
							}}
						>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									paddingBottom: '1rem',
									gap: 1,
								}}
							>
								<Typography
									variant="h2"
									sx={{ fontSize: '2.5rem', fontWeight: '600' }}
								>
									{car?.make} {car?.model}
								</Typography>
								<Box sx={{ fontSize: '1.5rem', fontWeight: '600' }}>
									${car?.daily_rate}/day
								</Box>
								<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
									<BsIcon color="red" size={20} name="BsFillStarFill" />
									<BsIcon color="red" size={20} name="BsFillStarFill" />
									<BsIcon color="red" size={20} name="BsFillStarFill" />
									<BsIcon color="red" size={20} name="BsFillStarFill" />
									<BsIcon color="red" size={20} name="BsFillStarFill" />
									<Typography
										variant="caption"
										sx={{
											fontSize: '20px',
											fontWeight: '600',
											marginLeft: '7px',
										}}
									>
										{carRating &&
											car &&
											`${carRating / car?.comments?.length} (${
												car.comments.length
											})`}
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									paddingBottom: '1rem',
									borderTop: '0.2rem solid rgba(0,0,0,.1)',
									borderBottom: '0.2rem solid rgba(0,0,0,.1)',
								}}
							>
								<Typography
									variant="caption"
									sx={{
										padding: '1rem 0',
										fontSize: '15px',
										color: 'gray',
									}}
								>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Deleniti vero quisquam ipsam nam praesentium debitis! Laborum
									porro culpa ipsa. Eveniet sequi illum perferendis. Eaque,
									explicabo! Eius quos fuga at. Inventore!
								</Typography>
								<Link>
									<Button
										variant="contained"
										sx={{
											fontWeight: 'bold',
											backgroundColor: 'red',
											padding: '0.5rem 1.5rem',
											transition: 'opacity 0.5s',
											'&:hover': { backgroundColor: 'red', opacity: 0.6 },
										}}
									>
										Rent Car
									</Button>
								</Link>
							</Box>
							<Box
								sx={{
									paddingTop: '15px',
									display: 'grid',
									gridTemplateColumns: 'repeat(4,minmax(9rem,1fr))',
									rowGap: 2,
									flexWrap: 'wrap',
									color: 'gray',
									width: '100%',
									margin: '5px 0',
								}}
							>
								<Typography
									variant="h3"
									sx={{
										fontSize: '15px',
										display: 'flex',
										flex: '1 1 9rem',
										alignItems: 'center',
										gap: '5px',
									}}
								>
									<BsIcon color="red" size={14} name="BsFillCarFrontFill" />
									{car?.make}
								</Typography>
								<Typography
									variant="h3"
									sx={{
										fontSize: '15px',
										flex: '1 1 9rem',
										display: 'flex',
										alignItems: 'center',
										gap: '5px',
									}}
								>
									<BsIcon color="red" size={14} name="BsFillCarFrontFill" />
									{car?.car_type}
								</Typography>
								<Typography
									variant="h3"
									sx={{
										fontSize: '15px',
										flex: '1 1 9rem',
										display: 'flex',
										alignItems: 'center',
										gap: '5px',
									}}
								>
									<BsIcon
										color="red"
										size={14}
										name="BsFillCalendar2DateFill"
									/>
									{car?.year}
								</Typography>
								<Typography
									variant="h3"
									sx={{
										fontSize: '15px',
										flex: '1 1 9rem',
										display: 'flex',
										alignItems: 'center',
										gap: '5px',
									}}
								>
									<BsIcon color="red" size={14} name="BsFillPeopleFill" />
									{car?.seating_capacity} seats
								</Typography>
								<Typography
									variant="h3"
									sx={{
										fontSize: '15px',
										flex: '1 1 9rem',
										display: 'flex',
										alignItems: 'center',
										gap: '5px',
									}}
								>
									<BsIcon color="red" size={14} name="BsFuelPumpFill" />
									{car?.fuel_type}
								</Typography>
								<Typography
									variant="h3"
									sx={{
										fontSize: '15px',
										flex: '1 1 9rem',
										display: 'flex',
										alignItems: 'center',
										gap: '5px',
									}}
								>
									<BsIcon color="red" size={14} name="BsGearWide" />
									{car?.transmission}
								</Typography>
								<Typography
									variant="h3"
									sx={{
										fontSize: '15px',
										flex: '1 1 9rem',
										display: 'flex',
										alignItems: 'center',
										gap: '5px',
									}}
								>
									<BsIcon color="red" size={14} name="BsCarFront" />
									{car?.door_count} Doors
								</Typography>
								<Typography
									variant="h3"
									sx={{
										fontSize: '15px',
										flex: '1 1 10rem',
										display: 'flex',
										alignItems: 'center',
										gap: '5px',
									}}
								>
									<GiFuelTank color="red" size={14} name="BsCarFront" />
									{car?.tank_volume_gallons} Gal
								</Typography>
							</Box>
						</Box>
					</Box>
					<DescriptionSection comments={car?.comments} />
				</Box>
				<Box sx={{}}>
					<Box sx={{ backgroundColor: 'red' }}>
						<Typography
							variant="h2"
							sx={{
								color: 'white',
								fontSize: '1.2rem',
								fontWeight: 'bold',
								padding: '0.8rem 1.2rem',
							}}
						>
							FEATURED CARS
						</Typography>
					</Box>
					<CarsCarousel />
				</Box>
			</Container>
		</Box>
	)
}
export default SingleCar
