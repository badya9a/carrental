import { FC } from 'react'
import { ICar } from '../../../shared/cars.interface'
import { Box, Button } from '@mui/material'
import BsIcon from '../../ui/BsIcon'
import { CartService } from '../../../services/cart/cart.service'

const CartItem: FC<ICar> = ({ id, make, model, fuel_type, daily_rate }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '3rem',
				padding: '1rem 0',
				borderBottom: '0.1rem solid rgba(0,0,0,.1)',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					textAlign: 'left',
					gap: '2rem',
					flex: '1 1 30rem',
				}}
			>
				<img
					src={`/images/cars/${make.toLowerCase}-${model.toLowerCase}1.jpg`}
					alt={`${make}-${model}`}
					style={{
						objectFit: 'cover',
						height: '6rem',
						width: '12rem',
						borderRadius: '0.5rem',
					}}
				/>
				<Box sx={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
					{make} {model}
				</Box>
			</Box>
			<Box
				sx={{
					flex: '1 1 10rem',
					fontSize: '1.4rem',
					textAlign: 'center',
					fontWeight: '400',
					color: 'black',
				}}
			>
				{fuel_type}
			</Box>
			<Box
				sx={{
					flex: '1 1 10rem',
					fontSize: '1.4rem',
					textAlign: 'center',
					fontWeight: '400',
					color: 'black',
				}}
			>
				${daily_rate}
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flex: '1 1 10rem',
					fontSize: '1.4rem',
					textAlign: 'center',
					fontWeight: '400',
					color: 'black',
				}}
			>
				<Button
					sx={{ cursor: 'pointer' }}
					onClick={() => CartService.deleteFromCart(id)}
				>
					<BsIcon color="red" name="BsFillTrash3Fill" size={20} />
				</Button>
			</Box>
		</Box>
	)
}
export default CartItem
