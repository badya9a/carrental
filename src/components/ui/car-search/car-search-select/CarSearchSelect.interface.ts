import { Options } from 'react-select'
import { IOption } from '../CarSearch'
import { ControllerRenderProps } from 'react-hook-form'

export interface ISelect {
	options: Options<IOption>
	field: ControllerRenderProps<any, any>
}
