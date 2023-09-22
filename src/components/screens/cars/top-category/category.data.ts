export interface ICategory {
	title: string
	bgImage: string
	value: string
	classname: string
}

export const CategoryData: ICategory[] = [
	{
		classname: 'category-1',
		title: 'Convertible',
		value: 'Convertible',
		bgImage: '/images/category-convertable',
	},
	{
		classname: 'category-2',
		value: 'Sports Car',
		title: 'Sports Car',
		bgImage: '/images/category-sportscar',
	},
	{
		classname: 'category-3',
		value: 'SUV',
		title: 'SUV',
		bgImage: '/images/category-suv',
	},
	{
		classname: 'category-4',
		value: 'Minivan',
		title: 'Mini Van',
		bgImage: '/images/category-minivan',
	},
	{
		classname: 'category-5',
		value: 'Hatchback',
		title: 'HatchBack',
		bgImage: '/images/category-hatchback',
	},
]
