import { Box, Typography, TextField } from '@mui/material'
import { FC } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

const ContactDetailsForm: FC<{ register: UseFormRegister<FieldValues> }> = ({
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
						Contact Details
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
							{...register('firstName')}
							required
							placeholder="First Name"
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
					<TextField
						{...register('company')}
						required
						placeholder="Company"
						type="text"
						hiddenLabel={true}
						sx={{
							backgroundColor: 'white',
							width: '100%',
							borderRadius: '3px',
						}}
					/>
					<TextField
						{...register('country')}
						required
						placeholder="Country"
						type="text"
						hiddenLabel={true}
						sx={{
							backgroundColor: 'white',
							width: '100%',
							borderRadius: '3px',
						}}
					/>
					<TextField
						{...register('address')}
						required
						placeholder="Address"
						type="text"
						hiddenLabel={true}
						sx={{
							backgroundColor: 'white',
							width: '100%',
							borderRadius: '3px',
						}}
					/>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							flexWrap: 'wrap',
							justifyContent: 'space-between',
						}}
					>
						<TextField
							{...register('city')}
							required
							placeholder="Town/City"
							type="text"
							hiddenLabel={true}
							sx={{
								backgroundColor: 'white',
								width: '49%',
								borderRadius: '3px',
							}}
						/>
						<TextField
							{...register('postcode')}
							required
							placeholder="Postcode/ZIP"
							type="number"
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
							{...register('phone')}
							required
							placeholder="Phone No"
							type="number"
							hiddenLabel={true}
							sx={{
								backgroundColor: 'white',
								width: '49%',
								borderRadius: '3px',
							}}
						/>
						<TextField
							{...register('email')}
							required
							placeholder="Email Address"
							type="email"
							hiddenLabel={true}
							sx={{
								backgroundColor: 'white',
								width: '49%',
								borderRadius: '3px',
							}}
						/>
					</Box>
				</Box>
			</Box>
			<Box></Box>
		</Box>
	)
}
export default ContactDetailsForm
