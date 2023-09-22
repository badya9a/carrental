import { Box } from '@mui/material'

const PageTitle = () => {
	return (
		<Box
			sx={{
				minHeight: '30rem',
				position: 'relative',
				background: `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.2)),url('/images/pagetitle-bg.jpg')`,
				backgroundPosition: '50%',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		></Box>
	)
}
export default PageTitle
