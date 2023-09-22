import { Box } from '@mui/material'
import Slider from 'react-slick'
import { ITestimonial, testimonialsData } from './testimonials.data'
import TestimonialItem from './TestimonialItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TestimonialsCarousel = () => {
	return (
		<Box sx={{ margin: '40px 0 0 0' }}>
			<Slider
				dots={true}
				infinite={true}
				autoplay={true}
				slidesToShow={window.innerWidth >= 767 ? 2 : 1}
				slidesToScroll={1}
				arrows={false}
				touchMove={true}
				swipeToSlide={true}
			>
				{testimonialsData?.map((item: ITestimonial, idx: number) => (
					<TestimonialItem key={idx} {...item} />
				))}
			</Slider>
		</Box>
	)
}
export default TestimonialsCarousel
