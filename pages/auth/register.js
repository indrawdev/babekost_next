import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { FaUser } from 'react-icons/fa'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/AuthForm.module.css'

export default function RegisterPage() {

	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')

	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')

	const { register, error } = useContext(AuthContext)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (password !== passwordConfirm) {
			// toast.error('Passwords do not match!')
			return
		}

		register({ name, email, password })
	}

	return (
		<Layout title='Register'>
			<div className={styles.auth}>
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
						<input type='submit' name='Submit' className='btn' />
					</div>
				</form>
			</div>
		</Layout>
	)
}