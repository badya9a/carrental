import { Box, Container } from '@mui/material'
import { statisticData } from './statistic.data'
import StatisticItem from './StatisticItem'

const Statistics = () => {
	return (
		<Box
			sx={{
				background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.7)),url(${'images/statistic-bg.jpg'})`,
				backgroundAttachment: 'fixed',
				backgroundPosition: '50%',
				backgroundSize: 'cover',
			}}
		>
			<Container
				sx={{
					maxWidth: '90% !important',
					padding: '2.5rem 0px !important',
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit,minmax(15rem,1fr))',
					gap: 2.5,
				}}
			>
				{statisticData.map((item, index) => (
					<StatisticItem item={item} key={index} />
				))}
			</Container>
		</Box>
	)
}
export default Statistics
