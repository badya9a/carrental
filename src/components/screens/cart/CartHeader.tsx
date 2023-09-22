import { Box, Typography } from '@mui/material'

const CartHeader = () => {
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				backgroundColor: 'black',
				color: 'white',
				gap: '1rem',
				marginBottom: '1rem',
				padding: '0.7rem 1.3rem',
			}}
		>
			<Typography
				variant="h3"
				sx={{
					fontSize: '20px',
					fontWeight: 'bold',
					flex: '1 1 30rem',
					textAlign: 'left',
				}}
			>
				Car
			</Typography>
			<Typography
				variant="h3"
				sx={{
					fontSize: '20px',
					fontWeight: 'bold',
					flex: '1 1 10rem',
					textAlign: 'center',
				}}
			>
				Fuel Type
			</Typography>
			<Typography
				variant="h3"
				sx={{
					fontSize: '20px',
					fontWeight: 'bold',
					flex: '1 1 10rem',
					textAlign: 'center',
				}}
			>
				Price
			</Typography>
			<Typography
				variant="h3"
				sx={{
					fontSize: '20px',
					fontWeight: 'bold',
					flex: '1 1 10rem',
					textAlign: 'center',
				}}
			>
				Action
			</Typography>
		</Box>
	)
}
export default CartHeader
