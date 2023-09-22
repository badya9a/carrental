import { Box, Typography } from '@mui/material'
import { Dispatch, FC, SetStateAction } from 'react'
import BsIcon from '../../ui/BsIcon'

export interface IFaqItem {
	id: number
	title: string
	description: string
	setActiveIndex: Dispatch<SetStateAction<number>>
	active?: boolean
}

const FaqItem: FC<IFaqItem> = ({
	id,
	active,
	description,
	title,
	setActiveIndex,
}) => {
	return (
		<Box sx={{ marginBottom: '1rem' }}>
			<Box
				sx={{
					borderBottom: '.15rem solid rgba(0,0,0,.1)',
					cursor: 'pointer',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: '1rem',
					padding: '1rem 0.3rem',
				}}
				onClick={() => setActiveIndex(active ? -1 : id)}
			>
				<Typography
					variant="h3"
					sx={{
						fontSize: '20px',
						fontWeight: 'bold',
						color: `${active ? 'red' : 'black'}`,
						transition: 'all 0.3s linear',
					}}
				>
					{title}
				</Typography>

				<Box
					sx={{
						width: '2.5rem',
						height: '2.5rem',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: `${active ? 'red' : 'black'}`,
					}}
				>
					<BsIcon
						color="white"
						name={`${active ? 'BsDash' : 'BsPlus'}`}
						size={24}
					/>
				</Box>
			</Box>
			{active ? (
				<Typography
					variant="caption"
					sx={{
						fontSize: '14px',
						display: 'flex',
						flexWrap: 'wrap',
						padding: '1rem',
						color: 'gray',
					}}
				>
					{description}
				</Typography>
			) : null}
		</Box>
	)
}
export default FaqItem
