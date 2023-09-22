export interface IComment {
	full_name: string
	date: string
	rating: number
	comment_text: string
}

export interface ICar {
	id: number
	make: string
	model: string
	year: number
	color: string
	fuel_type: string
	transmission: string
	seating_capacity: number
	daily_rate: number
	car_type: string
	tank_volume_gallons: number
	door_count: number
	available: boolean
	comments: IComment[]
}
