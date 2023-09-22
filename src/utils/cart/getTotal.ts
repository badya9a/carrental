import { ICar } from '../../shared/cars.interface'

export const getTotal = (cars: number[], allCars: ICar[] | undefined) => {
	if (allCars === undefined) return 0
	const total = cars?.reduce((accumulator, carId) => {
		const car = allCars?.find((item: ICar) => item.id === carId)
		return car ? accumulator + car?.daily_rate : 0
	}, 0)
	return total
}
