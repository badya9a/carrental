import { Box, Container } from '@mui/material'

import { useQuery } from '@tanstack/react-query'
import { CarService } from '../../../services/cars.service'
import CartItem from './CartItem'
import { ICar } from '../../../shared/cars.interface'

import { useGetTotalBill } from '../../../utils/useGetTotalBill'
import EmptyCart from './EmptyCart'
import CartHeader from './CartHeader'
import CartTotal from './CartTotal'
import { useEffect, useState } from 'react'

import { useLocalStorage } from '../../../hooks/useLocalStorage'
import { useSelector } from 'react-redux'

const Cart = () => {
	const { data: allCars } = useQuery(
		['get all cars'],
		() => CarService.getAll(),
		{
			select: ({ data }) => data.cars,
		}
	)

	const [cars, setCars] = useLocalStorage<number[]>('cart', [])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const { total } = useGetTotalBill()

	return (
		<Box sx={{ backgroundColor: 'white' }}>
			<Container
				sx={{ maxWidth: '90% !important', padding: '2rem 0 !important' }}
			>
				{cars?.length ? (
					<>
						<Box>
							<Box>
								<CartHeader />
								<Box
									sx={{
										padding: '0 0.7rem',
										boxShadow: '0 0.5rem 1rem rgba(0,0,0,.1)',
										marginBottom: '2rem',
									}}
								>
									{cars.map((carId: number) => {
										const car = allCars?.find((item: ICar) => item.id === carId)
										return car ? <CartItem {...car} key={carId} /> : null
									})}
								</Box>
							</Box>
						</Box>
						<CartTotal total={total} />
					</>
				) : (
					<EmptyCart />
				)}
			</Container>
		</Box>
	)
}
export default Cart
