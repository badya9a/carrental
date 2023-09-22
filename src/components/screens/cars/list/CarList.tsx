import { useQuery } from '@tanstack/react-query'

import CarSearch from '../../../ui/car-search/CarSearch'
import { CarService } from '../../../../services/cars.service'
import { useEffect, useState } from 'react'
import { ICar } from '../../../../shared/cars.interface'
import CarouselItem from '../popular-cars/CarouselItem'
import { Box, Container, Pagination, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

const CarList = () => {
	const [params, setParams] = useState<string[]>()

	const location = useLocation()

	useEffect(() => {
		setParams(
			window.location.search
				.slice(1, window.location.search.length)
				.split('&')
				.map((string) => string.split('='))
				.map((array) => array[1])
		)
	}, [location])

	const { data: cars } = useQuery(['get all cars'], () => CarService.getAll(), {
		select: ({ data }) =>
			params && params.length
				? data.cars
						.filter((car) => (params[0] ? car.make === params[0] : car))
						.filter((car) => (params[1] ? car.car_type === params[1] : car))
						.filter((car) => (params[2] ? car.daily_rate <= +params[2] : car))
				: data.cars,
	})

	const [itemsPerPage, setItemsPerPage] = useState(6)
	const [page, setPage] = useState(1)
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value)
		window.scrollTo(0, 0)
	}

	return (
		<>
			<CarSearch />
			<Box sx={{ backgroundColor: 'white' }}>
				<Container
					sx={{
						height: '100%',
						maxWidth: '90% !important',
						padding: '2rem 0 !important',
					}}
				>
					{cars?.length ? (
						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: 'repeat(auto-fill, minmax(25rem, 1fr))',
								gap: '1rem',
								padding: '1rem 0 !important',
							}}
						>
							{cars
								?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
								.map((item: ICar) => (
									<CarouselItem {...item} key={item.id} />
								))}
						</Box>
					) : (
						<Typography
							variant="h3"
							sx={{
								fontSize: '30px',
								fontWeight: 'bold',
								display: 'flex',
								justifyContent: 'center',
								width: '100%',
							}}
						>
							No Car Found
						</Typography>
					)}
					{cars?.length ? (
						<Pagination
							count={cars?.length ? Math.ceil(cars?.length / itemsPerPage) : 10}
							page={page}
							onChange={handleChange}
							shape="rounded"
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								marginTop: '1rem',
								ul: {
									gap: 1,
								},
								li: {
									borderRadius: '5px',
									fontSize: '20px',
									backgroundColor: '#000b49',
									':hover': {
										backgroundColor: '#dc0000',
									},
								},
								button: {
									color: 'white',
									fontSize: '20px',
									width: '3.5rem',
									height: '3.5rem',
								},
								span: {
									':hover': {
										backgroundColor: 'none',
									},
								},
							}}
						/>
					) : null}
				</Container>
			</Box>
		</>
	)
}
export default CarList
