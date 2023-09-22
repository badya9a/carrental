import { Box, Button, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { IComment } from '../../../../shared/cars.interface'
import CommentItem from './CommentItem'
import LeaveCommentForm from './LeaveCommentForm'

interface IDescriptionLink {
	title: string
	value: 'description' | 'information' | 'reviews'
}

const links: IDescriptionLink[] = [
	{ title: 'Description', value: 'description' },
	{ title: 'Additional Information', value: 'information' },
	{ title: 'Reviews', value: 'reviews' },
]

interface bottomSectionInterface {
	bottomSection: 'description' | 'information' | 'reviews'
}

const DescriptionSection: FC<{ comments: IComment[] | undefined }> = ({
	comments,
}) => {
	const [bottomSection, setBottomSection] = useState<bottomSectionInterface>({
		bottomSection: 'description',
	})

	return (
		<Box sx={{ marginTop: '3rem' }}>
			<Box
				sx={{
					display: 'flex',
					borderBottom: '0.2rem solid rgba(0,0,0,.1)',
					gap: '10px',
				}}
			>
				{links.map((link, index) => (
					<Button
						variant="text"
						key={index}
						onClick={() => setBottomSection({ bottomSection: link.value })}
						sx={{
							padding: '0.5rem 2rem',
							fontSize: '16px',
							borderRadius: '0 !important',
							transition: 'all .3s linear',
							':hover': {
								color: 'red',
								borderBottom: '0.2rem solid red',
								transition: 'all .3s linear',
								backgroundColor: 'white',
							},
							borderBottom: `${
								link.value === bottomSection.bottomSection
									? '0.2rem solid red'
									: ''
							}`,
							color: `${
								link.value === bottomSection.bottomSection ? 'red' : 'gray'
							}`,
						}}
					>
						{link.title === 'Reviews'
							? `${link.title} (${comments?.length})`
							: link.title}
					</Button>
				))}
			</Box>
			<Box sx={{ marginTop: '2rem' }}>
				{bottomSection.bottomSection === 'description' ? (
					<Box>
						<Typography
							variant="caption"
							sx={{ fontSize: '16px', color: 'gray' }}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
							consequuntur voluptates facilis? Voluptatum beatae dolor suscipit
							praesentium, ratione quis rem quisquam impedit magni distinctio
							est nihil quibusdam obcaecati, fugiat culpa? Lorem ipsum dolor sit
							amet consectetur adipisicing elit. Quaerat consequuntur voluptates
							facilis? Voluptatum beatae dolor suscipit praesentium, ratione
							quis rem quisquam impedit magni distinctio est nihil quibusdam
							obcaecati, fugiat culpa?
						</Typography>
					</Box>
				) : bottomSection.bottomSection === 'information' ? (
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<Box sx={{ display: 'flex', gap: 2, paddingBottom: '10px' }}>
							<Typography
								variant="h3"
								sx={{ fontWeight: 'bold', fontSize: '18px', width: '15rem' }}
							>
								Length
							</Typography>
							<Typography variant="caption" sx={{ fontSize: '18px' }}>
								4573 Mm
							</Typography>
						</Box>
						<Box
							sx={{
								display: 'flex',
								gap: 2,
								paddingBottom: '10px',
							}}
						>
							<Typography
								variant="h3"
								sx={{ fontWeight: 'bold', fontSize: '18px', width: '15rem' }}
							>
								Width
							</Typography>
							<Typography variant="caption" sx={{ fontSize: '18px' }}>
								4573 Mm
							</Typography>
						</Box>
						<Box sx={{ display: 'flex', gap: 2, paddingBottom: '10px' }}>
							<Typography
								variant="h3"
								sx={{ fontWeight: 'bold', fontSize: '18px', width: '15rem' }}
							>
								Height
							</Typography>
							<Typography variant="caption" sx={{ fontSize: '18px' }}>
								1279 Mm
							</Typography>
						</Box>
						<Box sx={{ display: 'flex', gap: 2, paddingBottom: '10px' }}>
							<Typography
								variant="h3"
								sx={{ fontWeight: 'bold', fontSize: '18px', width: '15rem' }}
							>
								Wheelbase
							</Typography>
							<Typography variant="caption" sx={{ fontSize: '18px' }}>
								2457 Mm
							</Typography>
						</Box>
						<Box sx={{ display: 'flex', gap: 2, paddingBottom: '10px' }}>
							<Typography
								variant="h3"
								sx={{ fontWeight: 'bold', fontSize: '18px', width: '15rem' }}
							>
								Airbags
							</Typography>
							<Typography variant="caption" sx={{ fontSize: '18px' }}>
								6
							</Typography>
						</Box>
					</Box>
				) : bottomSection.bottomSection === 'reviews' ? (
					<Box>
						<Box>
							<Typography
								variant="h4"
								sx={{ fontWeight: 'bold', fontSize: '30px' }}
							>
								{comments?.length} Comments
							</Typography>
							<Box>
								{comments?.map((comment, index) => (
									<CommentItem {...comment} key={index} />
								))}
							</Box>
						</Box>
						<Box sx={{ width: '35rem', marginTop: '2rem' }}>
							<LeaveCommentForm />
						</Box>
					</Box>
				) : null}
			</Box>
		</Box>
	)
}
export default DescriptionSection
