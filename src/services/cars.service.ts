import { axiosClassic } from '../api/interceptors'
import { ICar } from '../shared/cars.interface'

export const CarService = {
	getAll() {
		return axiosClassic.get<{ cars: ICar[] }>('db.json')
	},
}
