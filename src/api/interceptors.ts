import axios from 'axios'
import { getContentType } from './api.helper'

export const axiosClassic = axios.create({
	baseURL: process.env.REACT_ADDRESS,
	headers: getContentType(),
})
