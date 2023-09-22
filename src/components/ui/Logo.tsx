import { Box, Link, Typography } from '@mui/material'

const Logo = () => {
	return (
		<Link
			href="/"
			sx={{
				display: 'flex',
				alignItems: 'center',
				textDecoration: 'none',
				gap: '1rem',
			}}
		>
			<img src="/images/logo.png" alt="logo" width={55} height={55} />
			<Box
				sx={{
					display: 'flex',
					textDecoration: 'none',
					flexDirection: 'column',
				}}
			>
				<Typography
					variant="h3"
					sx={{
						display: 'flex',
						fontSize: '2.5rem',
						fontWeight: '600',
						color: 'white',
						lineHeight: 1,
					}}
				>
					<Typography
						variant="inherit"
						sx={{
							color: 'red',
							fontSize: '2.5rem',
							fontWeight: '600',
						}}
					>
						Elite
					</Typography>
					Cars
				</Typography>
				<Typography sx={{ color: 'white', lineHeight: 1, fontSize: '1.2rem' }}>
					Car rental service
				</Typography>
			</Box>
		</Link>
	)
}
export default Logo
