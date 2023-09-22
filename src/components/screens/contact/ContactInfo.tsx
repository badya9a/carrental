import { Box } from '@mui/material'
import { ContactLinks } from './Contacts.data'
import ContactDetailItem from './ContactDetailItem'

const ContactInfo = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				gap: '1rem',
				justifyContent: 'center',
				padding: '2rem',
			}}
		>
			{ContactLinks.map((contact, index) => (
				<ContactDetailItem
					info={contact.info}
					title={contact.title}
					logoName={contact.logoName}
					key={index}
				/>
			))}
		</Box>
	)
}
export default ContactInfo
