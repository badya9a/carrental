import { useQuery } from '@tanstack/react-query'
import { CarService } from '../services/cars.service'
import { useCart } from '../hooks/useCart'
import { getTotal } from './cart/getTotal'
import { useEffect, useState } from 'react'
import { getStoreLocal } from './local-storage'

export const useGetTotalBill = () => {
	const { data: allCars } = useQuery(
		['get all cars'],
		() => CarService.getAll(),
		{
			select: ({ data }) => data.cars,
		}
	)

	const [cartCars, setCartCars] = useState([])

	useEffect(() => {
		setCartCars(getStoreLocal('cart'))
	}, [])

	const { cars } = useCart()

	const total = getTotal(cartCars, allCars)

	return { total }
}
