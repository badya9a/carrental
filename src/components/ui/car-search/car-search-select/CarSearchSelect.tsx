import ReactSelect, { OnChangeValue } from 'react-select'
import { IOption } from '../CarSearch'
import { FC } from 'react'
import { ISelect } from './CarSearchSelect.interface'

const CarSearchSelect: FC<ISelect> = ({ field, options }) => {
	const onChange = (newValue: unknown | OnChangeValue<IOption, boolean>) => {
		field.onChange((newValue as IOption).value)
	}

	return (
		<ReactSelect
			styles={{
				control: (baseStyles) => ({
					...baseStyles,
					display: 'flex',
					height: '100%',
					minHeight: '56px',
					flex: '1 1 15rem',
				}),
				container: (baseStyles) => ({
					...baseStyles,
					display: 'flex',
					flex: '1 1 15rem',
				}),
			}}
			onChange={onChange}
			defaultValue={options[0]}
			options={options}
		/>
	)
}
export default CarSearchSelect
