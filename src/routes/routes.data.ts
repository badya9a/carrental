import AboutUsPage from '../components/screens/about/AboutUsPage'
import CarList from '../components/screens/cars/list/CarList'
import SingleCar from '../components/screens/cars/single-car/SingleCar'
import Cart from '../components/screens/cart/Cart'
import Checkout from '../components/screens/checkout/Checkout'
import Contact from '../components/screens/contact/Contact'
import Faqs from '../components/screens/faqs/Faqs'
import Home from '../components/screens/home/Home'
import ServiceList from '../components/service/list/ServiceList'

import { RoutesData } from './routes.interface'

export const routeLinks: RoutesData[] = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/about-us',
		component: AboutUsPage,
	},
	{
		path: '/services',
		component: ServiceList,
	},
	{
		path: '/cars',
		component: CarList,
	},
	{
		path: '/car/:id',
		component: SingleCar,
	},
	{
		path: '/cart',
		component: Cart,
	},
	{
		path: '/checkout',
		component: Checkout,
	},
	{
		path: '/contact',
		component: Contact,
	},
	{
		path: '/faqs',
		component: Faqs,
	},
]
