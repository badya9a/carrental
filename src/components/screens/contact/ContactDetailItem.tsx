import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import BsIcon from '../../ui/BsIcon'
import { TypeBsIconName } from '../../../shared/types/icons.types'

export interface IContactDetailProps {
	logoName: TypeBsIconName
	title: string
	info: string
}

const ContactDetailItem: FC<IContactDetailProps> = ({
	info,
	logoName,
	title,
}) => {
	return (
		<Box sx={{ display: 'flex', flex: '1 1 15rem', gap: '2rem' }}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: '5rem',
					width: '5rem',
					bgcolor: 'red',
					borderRadius: '50%',
				}}
			>
				<BsIcon color="white" name={logoName} size={27} />
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<Typography variant="h3" sx={{ fontSize: '20px', fontWeight: 'bold' }}>
					{title}
				</Typography>
				<Typography variant="caption" sx={{ fontSize: '15px', color: 'gray' }}>
					{info}
				</Typography>
			</Box>
		</Box>
	)
}
export default ContactDetailItem
