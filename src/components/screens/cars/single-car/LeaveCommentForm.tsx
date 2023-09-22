import { Box, Button, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'

const LeaveCommentForm = () => {
	const { handleSubmit, register, reset } = useForm({
		mode: 'onChange',
	})

	const onSubmit = async (data: any) => {
		console.log(data)
		reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Typography
				variant="h3"
				sx={{ fontWeight: 'bold', fontSize: '25px', paddingBottom: '15px' }}
			>
				LEAVE A COMMENT
			</Typography>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					flexWrap: 'wrap',
					justifyContent: 'space-between',
				}}
			>
				<TextField
					{...register('name')}
					required
					placeholder="Name"
					type="text"
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
					placeholder="Email"
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
				{...register('comment')}
				required
				placeholder="Comment"
				type="text"
				hiddenLabel={true}
				multiline={true}
				rows={6}
				sx={{
					display: 'flex',
					backgroundColor: 'white',
					width: '100%',
					borderRadius: '3px',
					margin: '0.7rem 0',
				}}
			/>
			<Button
				variant="contained"
				type="submit"
				sx={{
					backgroundColor: 'red',
					width: '100%',
					marginTop: '0.8rem',
					padding: '10px 0',
					fontSize: '16px',
					transition: 'all .2s linear',
					':hover': {
						backgroundColor: 'red',
						opacity: 0.8,
						transition: 'all .2s linear',
					},
				}}
			>
				Submit
			</Button>
		</form>
	)
}
export default LeaveCommentForm
