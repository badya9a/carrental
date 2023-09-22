import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routeLinks } from './routes.data'
import NotFound from '../components/screens/not-found/NotFound'

const Router: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routeLinks.map((route) => {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
export default Router
