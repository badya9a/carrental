import { Carousel } from 'react-responsive-carousel'
import CarouselItem from '../CarouselItem'
import { useCarsCarousel } from './useCarsCarousel'
import { Box } from '@mui/material'
import { ICar } from '../../../../../shared/cars.interface'

const CarsCarousel = () => {
	const { data } = useCarsCarousel()

	console.log(window.innerWidth)

	return (
		<Box sx={{ margin: '20px 0' }}>
			<Carousel
				className="cars-carousel"
				infiniteLoop={true}
				showThumbs={false}
				showArrows={false}
				autoPlay={true}
				interval={3000}
				transitionTime={500}
				stopOnHover={true}
				autoFocus={false}
				centerMode={window.innerWidth >= 950}
				centerSlidePercentage={window.innerWidth >= 950 ? 33.3 : 100}
			>
				{data?.map((item: ICar, idx: number) => (
					<CarouselItem key={idx} {...item} />
				))}
			</Carousel>
		</Box>
	)
}
export default CarsCarousel
