import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/styles/index.css'
import '../src/assets/styles/variables.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Router from './routes/Routes'
import Layout from './components/layout/Layout'
import { Provider } from 'react-redux'
import { store } from './store/store'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Layout>
					<Router />
				</Layout>
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>
)
