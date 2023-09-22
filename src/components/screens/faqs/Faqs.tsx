import { Box, Container } from '@mui/material'
import { FaqsData } from './Faqs.data'
import FaqItem from './FaqItem'
import { useState } from 'react'

const Faqs = () => {
	const [activeIndex, setActiveIndex] = useState(-1)

	return (
		<Box sx={{ bgcolor: 'white', marginTop: '10%' }}>
			<Container
				sx={{
					maxWidth: '90% !important',
					padding: '2rem 0 !important',
					display: 'flex',
					alignItems: 'center',
					gap: '2rem',
				}}
			>
				<Box sx={{ flex: '1 1 32rem' }}>
					{FaqsData.map((item, index) => (
						<FaqItem
							active={activeIndex === item.id}
							id={item.id}
							title={item.title}
							description={item.description}
							key={index}
							setActiveIndex={setActiveIndex}
						/>
					))}
				</Box>
				<Box sx={{ flex: '1 1 30rem', height: '30rem' }}>
					<img
						src="/images/FAQsbg.jpg"
						alt="car"
						style={{ height: '100%', objectFit: 'cover', width: '100%' }}
					/>
				</Box>
			</Container>
		</Box>
	)
}
export default Faqs
