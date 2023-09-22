import { Box } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Slider from './Carousel/Carousel'
import CarSearch from '../../ui/car-search/CarSearch'
import AboutSlide from '../about/AboutSlide'
import OurServices from '../about/serviceSection/OurServices'
import Statistics from '../about/statistics/Statistics'
import TopCategory from '../cars/top-category/TopCategory'
import PopularCars from '../cars/popular-cars/PopularCars'
import Testimonials from '../about/testimonials/Testimonials'
import OurTeam from '../about/team/OurTeam'

const Home = () => {
	return (
		<Box
			sx={{
				padding: 0,
				width: '100% !important',
			}}
		>
			<Slider />
			<CarSearch />
			<AboutSlide />
			<OurServices />
			<Statistics />
			<TopCategory />
			<PopularCars />
			<Testimonials />
			<OurTeam />
		</Box>
	)
}
export default Home
