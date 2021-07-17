import { useContext } from 'react'
import AuthProvider from '@/context/AuthContext'

export default function Header() {
	const [user, logout] = useContext(AuthProvider)

	return (
		<div></div>
	)
}