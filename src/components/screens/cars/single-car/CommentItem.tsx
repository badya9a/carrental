import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { IComment } from '../../../../shared/cars.interface'
import { getMonthName } from '../../../../utils/monthToString'
import BsIcon from '../../../ui/BsIcon'
import { wrap } from 'module'

const CommentItem: FC<IComment> = ({
	comment_text,
	date,
	full_name,
	rating,
}) => {
	return (
		<Box sx={{ marginTop: '10px', padding: '0.5rem 0' }}>
			<Box sx={{ display: 'flex', gap: 2 }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography
						variant="caption"
						sx={{
							display: 'flex',
							padding: '18px 35px',
							bgcolor: 'green',
							color: 'white',
							borderRadius: '50%',
							fontSize: '30px',
						}}
					>
						{full_name.split('')[0]}
					</Typography>
				</Box>
				<Box sx={{ flex: '1 1 35rem' }}>
					<Box
						sx={{
							display: 'flex',
							paddingBottom: '0.5rem',
							gap: '0.5rem',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: '1rem',
								flex: '1 1 30rem',
							}}
						>
							<Typography
								variant="h3"
								sx={{ fontWeight: 'bold', fontSize: '20px' }}
							>
								{full_name}
							</Typography>
							<Typography
								variant="caption"
								sx={{ width: '2rem', height: '0.2rem', backgroundColor: 'red' }}
							>
								-
							</Typography>
							<Typography
								variant="h6"
								sx={{
									display: 'flex',
									gap: 1,
									color: 'white',
									backgroundColor: 'red',
									padding: '5px',
									fontSize: '15px',
								}}
							>
								{getMonthName(+date.split('-')[1]).slice(0, 3)}{' '}
								{`${date.split('-')[2]}st,`} {date.split('-')[0]}
							</Typography>
						</Box>
						<Box sx={{ display: 'flex', gap: 0.7, alignItems: 'center' }}>
							<BsIcon size={18} color="red" name="BsFillStarFill" />
							<Typography
								variant="h5"
								sx={{ fontSize: '18px', fontWeight: '600' }}
							>
								{rating}
							</Typography>
						</Box>
					</Box>
					<Typography
						variant="inherit"
						sx={{
							color: 'gray',
							paddingBottom: '0.7rem',
							fontSize: '18px',
							lineHeight: '1.5',
						}}
					>
						{comment_text}
					</Typography>
					<Box
						sx={{
							display: 'flex',
							gap: '0.3rem',
							alignItems: 'center',
							':hover': {
								opacity: '0.7',
							},
						}}
					>
						<BsIcon color="red" size={26} name="BsFillReplyFill" />
						<Typography
							variant="caption"
							sx={{
								color: 'red',
								fontSize: '16px',
								':hover': {
									cursor: 'pointer',
								},
							}}
						>
							Reply
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
export default CommentItem
