import { Box } from '@mui/material'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Carousel } from 'react-responsive-carousel'
import { carouselSlides } from './carousel.data'
import CarouselSlide from './CarouselSlide'

const Slider = () => {
	return (
		<Carousel
			className="main-slide"
			infiniteLoop={true}
			autoPlay={true}
			interval={4000}
			transitionTime={500}
			emulateTouch={true}
			renderArrowPrev={(clickHandler) => {
				return (
					<Box
						sx={{
							position: 'absolute',
							top: '50%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							padding: 1,
							zIndex: 20,
							color: 'white',
							'&:hover': { color: 'red', transition: 'color 0.2s linear' },
						}}
						onClick={clickHandler}
					>
						<BsChevronLeft size={60} fontWeight={800} />
					</Box>
				)
			}}
			renderArrowNext={(clickHandler) => {
				return (
					<Box
						sx={{
							position: 'absolute',
							top: '50%',
							right: 0,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							padding: 1,
							zIndex: 20,
							color: 'white',
							'&:hover': { color: 'red', transition: 'color 0.2s linear' },
						}}
						onClick={clickHandler}
					>
						<BsChevronRight size={60} />
					</Box>
				)
			}}
		>
			{carouselSlides.map((slide, idx) => (
				<CarouselSlide
					key={idx}
					title={slide.title}
					caption={slide.caption}
					bgImageLink={slide.bgImageLink}
				/>
			))}
		</Carousel>
	)
}
export default Slider
