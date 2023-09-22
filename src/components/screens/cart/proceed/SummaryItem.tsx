import { Box } from '@mui/material'
import { FC } from 'react'

interface ISummary {
	title: string
	amount: number
}

const SummaryItem: FC<ISummary> = ({ amount, title }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				paddingBottom: '1rem',
			}}
		>
			<Box sx={{ color: 'black', fontWeight: '600', fontSize: '1.5rem' }}>
				{title}
			</Box>
			<Box sx={{ color: 'grey', fontWeight: '400', fontSize: '1.5rem' }}>
				{amount}
			</Box>
		</Box>
	)
}
export default SummaryItem
