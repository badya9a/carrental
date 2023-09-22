import { Box, Link, Typography } from '@mui/material'
import { FC } from 'react'
import { ICategory } from './category.data'
import { useNavigate } from 'react-router-dom'

const CategoryItem: FC<ICategory> = ({ bgImage, title, classname, value }) => {
	const navigate = useNavigate()

	return (
		<Box
			gridArea={classname}
			sx={{
				overflow: 'hidden',
				position: 'relative',
				zIndex: 2,
				display: 'flex',
				height: '17rem',
				cursor: 'pointer',
				borderRadius: '0.5rem',
				':hover': {
					'.img': {
						transform: 'scale(1.1)',
						transition: '.2s linear all',
					},
				},
			}}
			onClick={() => navigate(`/cars?carMake=&carType=${value}&maxPrice=`)}
		>
			<img
				className="img"
				src={`${bgImage}.jpg`}
				alt={title}
				style={{
					width: '100%',
					objectFit: 'cover',
					transition: '.2s linear all',
				}}
			/>
			<Link
				sx={{
					height: '100%',
					width: '100%',
					fontSize: '30px',
					position: 'absolute',
					left: 0,
					top: 0,
					color: 'white',
					fontWeight: '600',
					textDecoration: 'none',
				}}
			>
				<Typography
					sx={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						padding: '1rem 2rem',
						fontSize: '1.7rem',
						fontWeight: '600',
					}}
				>
					{title}
				</Typography>
			</Link>
		</Box>
	)
}
export default CategoryItem
