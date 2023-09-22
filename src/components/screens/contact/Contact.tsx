import { Box, Container } from '@mui/material'
import ContactInfo from './ContactInfo'
import GetInTouchForm from './GetInTouchForm'

const Contact = () => {
	return (
		<Box sx={{ bgcolor: 'white' }}>
			<Container
				sx={{ maxWidth: '90% !important', padding: '2rem 0 !important' }}
			>
				<ContactInfo />
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '4rem',
						padding: '2rem 0',
						alignItems: 'center',
					}}
				>
					<GetInTouchForm />
					<Box
						sx={{ width: '100%', height: '100%', zIndex: 3, flex: '1 1 25rem' }}
					>
						<iframe
							title="location"
							width="100%"
							height="450"
							scrolling="no"
							src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kiev+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
						>
							<a href="https://www.maps.ie/population/">
								Find Population on Map
							</a>
						</iframe>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}
export default Contact
