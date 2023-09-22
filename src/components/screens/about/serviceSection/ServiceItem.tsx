import { FC } from 'react'
import { Box, Link, Typography } from '@mui/material'

import { serviceLink } from './services.data'

import BsIcon from '../../../ui/BsIcon'

const ServiceItem: FC<serviceLink> = ({ description, icon, title }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				boxShadow: '0 0.5rem 1rem rgba(0,0,0,.1);',
				position: 'relative',
				padding: 3,
				flex: '1 0 400px',
				maxWidth: '400px',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'flex-start',
				}}
			>
				<Link
					sx={{
						textDecoration: 'none',
						color: 'Black',
						fontSize: '30px',
						fontWeight: '600',
						marginBottom: '10px',
						transition: 'all .2s linear',
						cursor: 'pointer',
						':hover': {
							color: 'red',
							transition: 'all .2s linear',
						},
					}}
				>
					{title}
				</Link>
				<Typography sx={{ width: '300px' }}>{description}</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: '50px',
					height: '50px',
					backgroundColor: 'red',
					position: 'absolute',
					right: 15,
				}}
			>
				<BsIcon name={icon} color="white" size={30} />
			</Box>
		</Box>
	)
}
export default ServiceItem
