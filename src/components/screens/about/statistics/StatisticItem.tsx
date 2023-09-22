import { FC } from 'react'

import { Box, Typography } from '@mui/material'
import BsIcon from '../../../ui/BsIcon'
import { IStat } from './statistic.data'

const StatisticItem: FC<{ item: IStat }> = ({ item }) => {
	return (
		<Box
			sx={{
				alignItems: 'center',
				display: 'flex',
				backgroundColor: 'hsla(0,0%,100%,.2)',
				borderRadius: '15px',
				gap: 3,
				padding: '25px',
			}}
		>
			<BsIcon color="white" size={60} name={item.icon} />
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<Typography
					variant="h3"
					sx={{
						fontWeight: '600',
						color: 'white',
					}}
				>
					{item.amount}+
				</Typography>
				<Typography variant="caption" sx={{ color: 'white', fontSize: '18px' }}>
					{item.title}
				</Typography>
			</Box>
		</Box>
	)
}
export default StatisticItem
