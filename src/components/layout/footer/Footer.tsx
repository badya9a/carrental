import {
	Box,
	Container,
	Grid,
	Link,
	List,
	ListItem,
	Typography,
} from '@mui/material'
import Logo from '../../ui/Logo'
import { footerLinks } from './footer.data'
import FooterItem from './FooterItem'
import BsIcon from '../../ui/BsIcon'
import { socialMedia } from './socialMedia.data'

const Footer = () => {
	return (
		<Box sx={{ bgcolor: 'black', height: '100%' }}>
			<Container
				sx={{
					maxWidth: '90vw !important',
					padding: '2rem 5%',
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit,minmax(15rem,1fr))',
					gap: '1rem',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						gap: 3,
					}}
				>
					<Logo />
					<Typography
						variant="caption"
						sx={{ color: 'white', fontSize: '15px' }}
					>
						We Provide Best Cars With The Best Prices. We Are Expert In Car
						Rental. Enjoy Your Holidays With Us. We Make Your Drive Memorable.
						We Care For Your Safety.
						<Box sx={{ display: 'flex', gap: 2, marginTop: '1rem' }}>
							{socialMedia.map((link, index) => (
								<Link
									className="link"
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										':hover': {
											cursor: 'pointer',
											opacity: 0.7,
										},
									}}
									target="_blank"
									href={link.link}
									key={index}
								>
									<BsIcon color="white" size={24} name={link.icon} />
								</Link>
							))}
						</Box>
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: '100%',
					}}
				>
					<Typography
						variant="h2"
						sx={{
							color: 'white',
							display: 'flex',
							paddingBottom: '2rem',
							letterSpacing: '.2rem',
							fontSize: '2rem',
							fontWeight: 'bold',
						}}
					>
						Useful Links
					</Typography>
					<Box sx={{ display: 'flex', gap: 2 }}>
						<Box
							sx={{
								display: 'flex',
								flex: '1 1 15rem',
								flexDirection: 'column',
								alignItems: 'flex-start',
								gap: 2,
							}}
						>
							{footerLinks.slice(0, 2).map((link, index) => (
								<FooterItem link={link.link} title={link.title} key={index} />
							))}
						</Box>
						<Box
							sx={{
								display: 'flex',
								flex: '1 1 15rem',
								flexDirection: 'column',
								alignItems: 'flex-start',
								gap: 2,
							}}
						>
							{footerLinks.slice(2, 4).map((link, index) => (
								<FooterItem link={link.link} title={link.title} key={index} />
							))}
						</Box>
					</Box>
				</Box>
				<Box>
					<Typography
						variant="h4"
						sx={{
							color: 'white',
							display: 'flex',
							paddingBottom: '2rem',
							letterSpacing: '.2rem',
							fontWeight: 'bold',
						}}
					>
						Contact Info
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
						}}
					>
						<List
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								width: '315px',
								height: '100%',
								listStyleType: 'none',
								padding: 0,
								gap: 1,
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
								<BsIcon color="red" name="BsFillTelephoneFill" size={16} />
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
								<BsIcon name="BsFillEnvelopeFill" size={16} color="red" />
								<Typography
									variant="caption"
									sx={{ color: 'white', fontSize: '1rem' }}
								>
									abc@gmail.com
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
								<BsIcon name="BsMapFill" size={16} color="red" />
								<Typography
									variant="caption"
									sx={{ color: 'white', fontSize: '1rem' }}
								>
									Kiev, Ukraine
								</Typography>
							</ListItem>
						</List>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}
export default Footer
