import { ReactElement } from 'react'

export interface RoutesData {
	path: string
	component: () => ReactElement
}
