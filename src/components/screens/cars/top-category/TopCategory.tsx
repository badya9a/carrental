import { Box, Container, Grid, Typography } from '@mui/material'
import { CategoryData } from './category.data'
import CategoryItem from './CategoryItem'

const TopCategory = () => {
	return (
		<Box sx={{ backgroundColor: 'white', padding: '2rem 0' }}>
			<Container
				sx={{
					maxWidth: '90% !important',
					padding: '0 !important',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography
						variant="caption"
						sx={{
							color: 'red',
							fontSize: '20px',
							fontFamily: 'var(--cursive-font)',
						}}
					>
						Top Car Category
					</Typography>
					<Typography variant="h2" sx={{ fontSize: '40px', fontWeight: '500' }}>
						Our Category
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr 1fr',
						gridTemplateRows: 'auto',
						gridTemplateAreas: `"category-1 category-1 category-2"
						"category-3 category-4 category-5"`,
						marginTop: '20px',
						gap: 1.5,
					}}
				>
					{CategoryData.map((item, index) => (
						<CategoryItem {...item} key={index} />
					))}
				</Box>
			</Container>
		</Box>
	)
}
export default TopCategory
