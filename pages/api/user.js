import cookie from 'cookie'
import { API_URL } from '@/config/index'

export default async (req, res) => {
	if (req.method === 'GET') {

	} else {
		res.setHeader('Allow', ['GET'])
		res.status(405).json({ message: `Method ${req.method} not allowed` })
	}
}