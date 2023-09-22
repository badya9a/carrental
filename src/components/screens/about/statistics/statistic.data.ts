import { TypeBsIconName } from '../../../../shared/types/icons.types'

export interface IStat {
	title: string
	amount: number
	icon: TypeBsIconName
}

export const statisticData: IStat[] = [
	{ title: 'Experience', amount: 50, icon: 'BsBriefcaseFill' },
	{ title: 'Cars', amount: 500, icon: 'BsCarFrontFill' },
	{ title: 'Customers', amount: 1000, icon: 'BsFillPeopleFill' },
	{ title: 'Review', amount: 500, icon: 'BsFillChatFill' },
]
