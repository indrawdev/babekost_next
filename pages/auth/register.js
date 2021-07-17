import { useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/Register.module.css'

export default function RegisterPage() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log({ email, password })
	}

	return (
		<Layout title='Register'>
			<div>
				<h1>Register</h1>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						name='email'
						id='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						id='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
			</div>
		</Layout>
	)
}