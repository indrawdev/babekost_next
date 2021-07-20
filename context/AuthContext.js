import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NEXT_URL } from '@/config/index'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [error, setError] = useState(null)

	const router = useRouter()

	// Register user
	const register = async (user) => {
		const res = await fetch(`${NEXT_URL}/api/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				identifier,
				password
			})
		})

		const data = await res.json()
		if (res.ok) {

		} else {

		}
	}

	// Login user
	const login = async ({ email, password }) => {
		const res = await fetch(`${NEXT_URL}/api/login`, {
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
			setUser(data.user)
			router.push('user')
		} else {
			setError(data.message)
			setError(null)
		}

		console.log(data)
	}

	// Logout user
	const logout = async () => {
		console.log('logout')
	}

	// Check if user is logged in
	const checkUserLoggedIn = async (user) => {
		console.log(user)
	}

	return (
		<AuthContext.Provider value={{ user, error, register, login, logout }}>
			{children}
		</AuthContext.Provider>
	)

}

export default AuthContext