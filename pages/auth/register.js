import { useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/Register.module.css'

export default function RegisterPage() {

	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log({ email, password, passwordConfirm })
	}

	return (
		<Layout title='Register'>
			<div>
				<h1>Register</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							name='name'
							id='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor='phohe'>Phone</label>
						<input
							type='text'
							name='phone'
							id='phone'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
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
					<div>
						<label htmlFor='passwordConfirm'>Confirm Password</label>
						<input
							type='password'
							name='passwordConfirm'
							id='passwordConfirm'
							value={passwordConfirm}
							onChange={(e) => setPasswordConfirm(e.target.value)}
						/>
					</div>
					<div>
						<input type='submit' name='Submit' />
					</div>
				</form>
			</div>
		</Layout>
	)
}