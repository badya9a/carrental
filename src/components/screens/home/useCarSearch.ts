import { FieldValues, UseFormReset } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const useCarSearch = (reset: UseFormReset<FieldValues>) => {
	const navigate = useNavigate()
	const onSubmit = async (data: any) => {
		navigate(
			`/cars?carMake=${data.make === undefined ? '' : data.make}&carType=${
				data.car_type === undefined ? '' : data.car_type
			}&maxPrice=${data.maxPrice === undefined ? '' : data.maxPrice}`
		)
	}

	return { onSubmit }
}
