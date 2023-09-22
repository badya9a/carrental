import axios from 'axios'
import { getContentType } from './api.helper'

export const axiosClassic = axios.create({
	baseURL: 'http://localhost:3000/',
	headers: getContentType(),
})
