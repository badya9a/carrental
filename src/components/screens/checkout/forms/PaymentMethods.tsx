import {
	Box,
	FormControlLabel,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material'
import { FC } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

const PaymentMethods: FC<{ register: UseFormRegister<FieldValues> }> = ({
	register,
}) => {
	return (
		<Box
			sx={{
				padding: '1rem',
				marginBottom: '2rem',
				boxShadow: '0 0.5rem 1rem rgba(0,0,0,.1)',
				border: '0.1rem solid rgba(0,0,0,.1)',
			}}
		>
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
					Payment Methods
				</Typography>
			</Box>
			<Box>
				<RadioGroup>
					<FormControlLabel
						value="directBankTransfer"
						control={<Radio />}
						label="Direct Bank Transfer"
						{...register('bankTransfer')}
					/>
					<FormControlLabel
						value="cash"
						control={<Radio />}
						label="Cash On Delivery"
						{...register('cash')}
					/>
					<FormControlLabel
						value="paypal"
						control={<Radio />}
						label="Paypal"
						{...register('paypal')}
					/>
				</RadioGroup>
			</Box>
		</Box>
	)
}
export default PaymentMethods
