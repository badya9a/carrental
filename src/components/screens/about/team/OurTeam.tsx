import { Box, Container, Grid, Typography } from '@mui/material'
import ServiceItem from '../serviceSection/ServiceItem'
import { serviceData } from '../serviceSection/services.data'
import { teamData } from './team.data'
import MemberItem from './MemberItem'

const OurTeam = () => {
	return (
		<Box sx={{ backgroundColor: 'white', padding: '2rem 0' }}>
			<Container
				sx={{
					maxWidth: '90% !important',
					padding: '0 !important',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography
						variant="caption"
						sx={{
							color: 'red',
							fontSize: '20px',
							fontFamily: 'var(--cursive-font)',
						}}
					>
						Meet Our Team
					</Typography>
					<Typography variant="h2" sx={{ fontSize: '40px', fontWeight: '500' }}>
						Our Team
					</Typography>
				</Box>
				<Grid
					display="grid"
					gridTemplateColumns="repeat(auto-fit,minmax(15rem,1fr))"
					gap="1rem"
				>
					{teamData.map((link, index) => (
						<MemberItem {...link} key={index} />
					))}
				</Grid>
			</Container>
		</Box>
	)
}
export default OurTeam
