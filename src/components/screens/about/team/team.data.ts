export interface IMember {
	fullname: string
	position: string
	photoLink: string
}

export const teamData: IMember[] = [
	{
		fullname: 'Bruce Taylor',
		position: 'Founder & CEO',
		photoLink: 'images/member-1',
	},
	{
		fullname: 'Shirley Cowles',
		position: 'Manager',
		photoLink: 'images/member-2',
	},
	{
		fullname: 'Richard Collinge',
		position: 'Director',
		photoLink: 'images/member-3',
	},
	{
		fullname: 'Jill Saulbrey',
		position: 'Sales Manager',
		photoLink: 'images/member-4',
	},
]
