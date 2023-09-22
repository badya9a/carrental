import { Box, Container, List, ListItem, Typography } from '@mui/material'
import { FC } from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'

const Header1: FC<{ active: boolean }> = ({ active }) => {
	return (
		<Box
			sx={{
				borderBottom: '1px solid gray',
				display: `${active ? 'none' : 'block'}`,
			}}
		>
			<Container
				sx={{
					height: '46px',
					display: 'flex',
					alignItems: 'center',
					maxWidth: '90vw !important',
				}}
			>
				<List
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '315px',
						height: '24px',
						listStyleType: 'none',
						padding: 0,
					}}
				>
					<ListItem
						sx={{
							gap: 1,
							width: 'auto',
							display: 'flex',
							alignItems: 'center',
							padding: 0,
							height: '24px',
						}}
					>
						<BsFillTelephoneFill fill="red" size="16px" />
						<Typography
							variant="caption"
							sx={{ color: 'white', fontSize: '1rem' }}
						>
							+111-222-333
						</Typography>
					</ListItem>
					<ListItem
						sx={{
							gap: 1,
							padding: 0,
							width: 'auto',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<IoMdMail fill="red" size="16px" />
						<Typography
							variant="caption"
							sx={{ color: 'white', fontSize: '1rem' }}
						>
							abc@gmail.com
						</Typography>
					</ListItem>
				</List>
			</Container>
		</Box>
	)
}
export default Header1
