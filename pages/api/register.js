
import { API_URL } from '@/config/index'

export default async (req, res) => {
	if (req.method === 'POST') {
		const { email, password } = req.body

		const res = await fetch(`${API_URL}/api/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		})

		const data = await res.json()

		if (res.ok) {
			// todo set cookie
			res.status(200).json({ user: data.user })
		} else {
			res.status(data.statusCode).json({ message: data.message[0].messages[0].message })
		}

	} else {
		res.setHeader('Allow', ['POST'])
		res.status(405).json({ message: `Method ${req.method} not allowed` })
	}
}