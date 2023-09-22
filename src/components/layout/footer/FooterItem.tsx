import { Box, Link, Typography } from '@mui/material'
import BsIcon from '../../ui/BsIcon'
import { FC } from 'react'
import { footerLink } from './footer.data'

const FooterItem: FC<footerLink> = ({ link, title }) => {
	return (
		<Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
			<BsIcon color="red" name="BsFillCaretRightFill" size={12} />
			<Link
				href={link}
				sx={{
					textDecoration: 'none',
					color: 'white',
					fontSize: '18px',
					transition: 'all 0.3s linear',
					':hover': {
						color: 'red',
						transition: 'all 0.3s linear',
					},
				}}
			>
				{title}
			</Link>
		</Box>
	)
}
export default FooterItem
