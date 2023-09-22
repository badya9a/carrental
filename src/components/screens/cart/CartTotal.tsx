import { Box, Button, Link } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const CartTotal: FC<{ total: number }> = ({ total }) => {
	const navigate = useNavigate()

	return (
		<Box
			sx={{
				border: '0.1rem solid rgba(0,0,0,.1)',
				boxShadow: '0 0.5rem 1rem rgba(0,0,0,.1)',
				borderTop: '0.3rem solid red',
				marginLeft: 'auto',
				padding: '1rem',
				width: '40rem',
			}}
		>
			<Box sx={{ backgroundColor: 'white' }}>
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
						${(total * 0.1).toFixed(1)}
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
			<Link>
				<Button
					variant="contained"
					sx={{
						width: '100%',
						marginTop: '1rem',
						textAlign: 'center',
						borderRadius: 'none',
						fontSize: '16px',
						backgroundColor: 'red',
						transition: 'opacity 0.5s',
						'&:hover': { backgroundColor: 'red', opacity: 0.8 },
					}}
					onClick={() => navigate('/checkout')}
				>
					Proceed To Checkout
				</Button>
			</Link>
		</Box>
	)
}
export default CartTotal
