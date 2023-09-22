import Layout from '../../layout/Layout'
import AboutSlide from './AboutSlide'
import Statistics from './statistics/Statistics'
import OurTeam from './team/OurTeam'
import Testimonials from './testimonials/Testimonials'

const AboutUsPage = () => {
	return (
		<>
			<AboutSlide />
			<Statistics />
			<OurTeam />
			<Testimonials />
		</>
	)
}
export default AboutUsPage
