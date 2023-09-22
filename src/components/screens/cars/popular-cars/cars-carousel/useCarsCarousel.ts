import { useQuery } from '@tanstack/react-query'
import { CarService } from '../../../../../services/cars.service'

export const useCarsCarousel = () => {
	const queryData = useQuery(
		['get cars for carousel'],
		() => CarService.getAll(),
		{
			select: ({ data }) => data.cars.slice(0, 5),
		}
	)
	return queryData
}
