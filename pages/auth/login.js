import { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AuthContext from '@/context/AuthContext'
import { FaUser } from 'react-icons/fa'
import styles from '@/styles/AuthForm.module.css'

export default function LoginPage() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { login, error } = useContext(AuthContext)

	useEffect(() => error)

	const handleSubmit = (e) => {
		e.preventDefault()
		login({ email, password })
	}

	return (
		<Layout title='Login'>
			<div className={styles.auth}>
				<h1><FaUser /> Log In</h1>
				<form onSubmit={handleSubmit}>
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
						<input type='submit' name='Submit' className='btn' />
					</div>
				</form>
				<p>
					Don't have an account? <Link href='/auth/register'>Register</Link>
				</p>
			</div>
		</Layout>
	)
}