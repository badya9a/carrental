import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'

import CarSearchSelect from './car-search-select/CarSearchSelect'
import { useCarSearch } from '../../screens/home/useCarSearch'
import { useNavigate } from 'react-router-dom'

export interface IOption {
	value: string
	label: string
	isDisabled?: boolean
}

const brandOptions: IOption[] = [
	{ value: 'All', label: 'Car make', isDisabled: true },
	{ value: 'Toyota', label: 'Toyota' },
	{ value: 'Honda', label: 'Honda' },
	{ value: 'Ford', label: 'Ford' },
	{ value: 'Chevrolet', label: 'Chevrolet' },
	{ value: 'Nissan', label: 'Nissan' },
]

const modelOptions: IOption[] = [
	{ value: 'All', label: 'Car Type', isDisabled: true },
	{ value: 'SUV', label: 'SUV' },
	{ value: 'Sports Car', label: 'Sports Car' },
	{ value: 'Sedan', label: 'Sedan' },
	{ value: 'Minivan', label: 'Minivan' },
	{ value: 'Truck', label: 'Truck' },
]

const CarSearch = () => {
	const { handleSubmit, register, control, reset } = useForm({
		mode: 'onChange',
	})

	const navigate = useNavigate()

	const { onSubmit } = useCarSearch(reset)

	return (
		<Box sx={{ padding: '2rem 0' }}>
			<Container sx={{ maxWidth: '90% !important', padding: '0 !important' }}>
				<Typography
					variant="h3"
					color={'white'}
					fontWeight={'bold'}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					Search Cars
				</Typography>
				<Box>
					<form
						onSubmit={handleSubmit(onSubmit)}
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							padding: '2rem 0',
							gap: '1.5rem',
						}}
					>
						<Controller
							control={control}
							name="make"
							render={({ field }) => (
								<CarSearchSelect field={field} options={brandOptions} />
							)}
						/>
						<Controller
							control={control}
							name="car_type"
							render={({ field }) => (
								<CarSearchSelect field={field} options={modelOptions} />
							)}
						/>
						<TextField
							{...register('maxPrice')}
							placeholder="Max Price"
							color={'error'}
							type="number"
							hiddenLabel={true}
							sx={{
								backgroundColor: 'white',
								flex: '1 1 15rem',
								borderRadius: '3px',
							}}
						/>
						<Button
							type="submit"
							variant="contained"
							sx={{
								backgroundColor: 'red',
								'&:hover': { backgroundColor: 'red', opacity: 0.8 },
								display: 'flex',
								width: '100%',
								minHeight: '50px',

								border: '2px solid white',
							}}
						>
							Search
						</Button>
					</form>
				</Box>
			</Container>
		</Box>
	)
}
export default CarSearch
