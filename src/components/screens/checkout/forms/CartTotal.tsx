import { Box, Button, Link, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useGetTotalBill } from '../../../../utils/useGetTotalBill'

const CartTotal = () => {
	const navigate = useNavigate()

	const { total } = useGetTotalBill()

	return (
		<Box
			sx={{
				border: '0.1rem solid rgba(0,0,0,.1)',
				boxShadow: '0 0.5rem 1rem rgba(0,0,0,.1)',
				marginLeft: 'auto',
				padding: '1rem',
				marginBottom: '2rem',
			}}
		>
			<Box sx={{ backgroundColor: 'white' }}>
				<Box>
					<Typography
						variant="h3"
						sx={{
							fontSize: '35px',
							fontWeight: 500,
							paddingBottom: '1.5rem',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						Cart Total
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						paddingBottom: '1rem',
					}}
				>
					<Box
						sx={{
							color: 'black',
							fontWeight: '600',
							fontSize: '1.5rem',
						}}
					>
						Sub Total
					</Box>
					<Box
						sx={{
							color: 'grey',
							fontWeight: '400',
							fontSize: '1.5rem',
						}}
					>
						${total}
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						paddingBottom: '1rem',
					}}
				>
					<Box
						sx={{
							color: 'black',
							fontWeight: '600',
							fontSize: '1.5rem',
						}}
					>
						Insurance Fee
					</Box>
					<Box
						sx={{
							color: 'grey',
							fontWeight: '400',
							fontSize: '1.5rem',
						}}
					>
						${total * 0.1}
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						paddingBottom: '1rem',
					}}
				>
					<Box
						sx={{
							color: 'black',
							fontWeight: '600',
							fontSize: '1.5rem',
						}}
					>
						Total
					</Box>
					<Box
						sx={{
							color: 'grey',
							fontWeight: '400',
							fontSize: '1.5rem',
						}}
					>
						${total + total * 0.1}
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
export default CartTotal
