import { FC } from 'react'
import { TypeBsIconName } from '../../shared/types/icons.types'
import * as BsIcons from 'react-icons/bs'

const BsIcon: FC<{ name: TypeBsIconName; size: number; color: string }> = ({
	name,
	size,
	color,
}) => {
	const IconComponent = BsIcons[name]

	return <IconComponent size={size} color={color} />
}
export default BsIcon
