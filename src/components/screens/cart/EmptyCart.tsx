import { Box, Typography, Button, Link } from '@mui/material'
import BsIcon from '../../ui/BsIcon'
import { useNavigate } from 'react-router-dom'

const EmptyCart = () => {
	const navigate = useNavigate()

	return (
		<>
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
				<BsIcon color="white" name="BsFillCartFill" size={20} />
				<Typography variant="h3" sx={{ fontSize: '20px', fontWeight: 'bold' }}>
					Your Cart is Currently Empty
				</Typography>
			</Box>
			<Link>
				<Button
					variant="contained"
					sx={{
						padding: '8px 20px',
						borderRadius: 'none',
						fontSize: '16px',
						backgroundColor: 'red',
						transition: 'opacity 0.5s',
						'&:hover': { backgroundColor: 'red', opacity: 0.8 },
					}}
					onClick={() => navigate('/cars')}
				>
					Return To Cars
				</Button>
			</Link>
		</>
	)
}
export default EmptyCart
