import { FC } from 'react'
import { IMember } from './team.data'
import { Box, Link, Typography } from '@mui/material'
import BsIcon from '../../../ui/BsIcon'
import { TypeBsIconName } from '../../../../shared/types/icons.types'
import { useNavigate } from 'react-router-dom'

export interface ISocialMedia {
	icon: TypeBsIconName
	link: string
}

const socialMedia: ISocialMedia[] = [
	{ icon: 'BsInstagram', link: 'https://www.instagram.com/' },
	{ icon: 'BsFacebook', link: 'https://www.facebook.com/' },
	{ icon: 'BsTwitter', link: 'https://twitter.com/' },
	{ icon: 'BsYoutube', link: 'https://www.youtube.com/' },
]

const MemberItem: FC<IMember> = ({ fullname, photoLink, position }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				padding: '15px',
				boxShadow: '0 0.5rem 1rem rgba(0,0,0,.1)',
				borderBottom: '0.25rem solid #dc0000',
				':hover': {
					'.links': {
						display: 'flex',
						'.link': {
							width: '35px',
							height: '35px',
						},
					},
				},
			}}
		>
			<Box sx={{ position: 'relative' }}>
				<img
					src={`${photoLink}.jpg`}
					alt="crew member"
					width={'275px'}
					height={'300px'}
				/>
				<Box
					className="links"
					sx={{
						display: 'none',
						flexDirection: 'column',
						position: 'absolute',
						top: 15,
						right: 15,
						gap: 1,
					}}
				>
					{socialMedia.map((link, index) => (
						<Link
							key={index}
							className="link"
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: '0px',
								height: '0px',
								backgroundColor: 'red',
								borderRadius: '50%',
								zIndex: 10,
								':hover': {
									cursor: 'pointer',
									opacity: 0.7,
								},
							}}
							target="_blank"
							href={link.link}
						>
							<BsIcon color="white" size={20} name={link.icon} />
						</Link>
					))}
				</Box>
			</Box>
			<Typography variant="h4" sx={{ marginTop: '10px', fontSize: '30px' }}>
				{fullname}
			</Typography>
			<Typography
				variant="caption"
				sx={{ color: 'red', fontSize: '18px', fontWeight: '600' }}
			>
				{position}
			</Typography>
		</Box>
	)
}
export default MemberItem
