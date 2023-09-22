import { Box, Typography, TextField } from '@mui/material'
import { FC } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

const BookingDetailsForm: FC<{ register: UseFormRegister<FieldValues> }> = ({
	register,
}) => {
	return (
		<Box sx={{ flex: '1 1 40rem' }}>
			<Box
				sx={{
					marginBottom: '2rem',
					padding: '2rem',
					boxShadow: '0 0.5rem 1rem rgba(0,0,0,.1)',
					border: '0.1rem solid rgba(0,0,0,.1)',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						paddingBottom: '2rem',
					}}
				>
					<Typography variant="h2" sx={{ fontSize: '35px', fontWeight: '500' }}>
						Booking Details
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						rowGap: '0.7rem',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							flexWrap: 'wrap',
							justifyContent: 'space-between',
						}}
					>
						<TextField
							{...register('pickup address')}
							required
							placeholder="From Address"
							type="text"
							hiddenLabel={true}
							sx={{
								backgroundColor: 'white',
								width: '49%',
								borderRadius: '3px',
							}}
						/>
						<TextField
							{...register('lastName')}
							required
							placeholder="Last Name"
							type="text"
							hiddenLabel={true}
							sx={{
								backgroundColor: 'white',
								width: '49%',
								borderRadius: '3px',
							}}
						/>
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							flexWrap: 'wrap',
							justifyContent: 'space-between',
						}}
					>
						<TextField
							{...register('pickup-date')}
							helperText="Pickup date"
							required
							type="date"
							sx={{
								backgroundColor: 'white',
								width: '49%',
								borderRadius: '3px',
							}}
						/>
						<TextField
							{...register('pickup-time')}
							required
							helperText="Pickup time"
							type="time"
							sx={{
								backgroundColor: 'white',
								width: '49%',
								borderRadius: '3px',
							}}
						/>
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							flexWrap: 'wrap',
							justifyContent: 'space-between',
						}}
					>
						<TextField
							{...register('dropoff-date')}
							required
							type="date"
							helperText="Dropoff date"
							sx={{
								backgroundColor: 'white',
								width: '49%',
								borderRadius: '3px',
							}}
						/>
						<TextField
							{...register('dropoff-time')}
							required
							type="time"
							helperText="Dropoff time"
							sx={{
								backgroundColor: 'white',
								width: '49%',
								borderRadius: '3px',
							}}
						/>
					</Box>
					<TextField
						{...register('message')}
						placeholder="Message"
						type="text"
						hiddenLabel={true}
						multiline={true}
						rows={6}
						sx={{
							backgroundColor: 'white',
							width: '100%',
							borderRadius: '3px',
						}}
					/>
				</Box>
			</Box>
		</Box>
	)
}
export default BookingDetailsForm
