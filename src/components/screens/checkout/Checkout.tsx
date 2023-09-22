import { Box, Button, Container, Link } from '@mui/material'
import { useForm } from 'react-hook-form'
import ContactDetailsForm from './forms/ContactDetailsForm'
import BookingDetailsForm from './forms/BookingDetailsForm'
import PaymentMethods from './forms/PaymentMethods'
import { useNavigate } from 'react-router-dom'
import CartTotal from './forms/CartTotal'
import { useEffect } from 'react'

const Checkout = () => {
	const { register, handleSubmit, reset } = useForm({ mode: 'onChange' })

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const navigate = useNavigate()

	const onSubmit = (data: any) => {
		console.log(data)
		reset()
	}

	return (
		<Box sx={{ bgcolor: 'white' }}>
			<Container
				sx={{ maxWidth: '90% !important', padding: '2rem 0 !important' }}
			>
				<form
					onSubmit={handleSubmit(onSubmit)}
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '2rem',
						alignItems: 'flex-start',
					}}
				>
					<Box sx={{ flex: '1 1 35rem' }}>
						<ContactDetailsForm register={register} />
						<BookingDetailsForm register={register} />
					</Box>
					<Box sx={{ flex: '1 1 15rem' }}>
						<PaymentMethods register={register} />
						<CartTotal />
						<Link>
							<Button
								variant="contained"
								type="submit"
								sx={{
									width: '100%',
									padding: '10px 0',
									textAlign: 'center',
									borderRadius: 'none',
									fontSize: '16px',
									backgroundColor: 'red',
									transition: 'opacity 0.5s',
									'&:hover': { backgroundColor: 'red', opacity: 0.8 },
								}}
							>
								Place Order
							</Button>
						</Link>
					</Box>
				</form>
			</Container>
		</Box>
	)
}
export default Checkout
