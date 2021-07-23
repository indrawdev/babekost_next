import { useContext } from 'react'
import Link from 'next/link'
import Search from './Search'
import AuthContext from '@/context/AuthContext'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import styles from '@/styles/Header.module.css'

export default function Header() {
	const [user, logout] = useContext(AuthContext)

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href='/'>
					<a>BabeKost</a>
				</Link>
			</div>

			<Search />

			<nav>
				<ul>
					<li>
						<Link href='/kost'>
							<a>Kost</a>
						</Link>
					</li>
					<li>
						<Link href='/apartemen'>
							<a>Apartemen</a>
						</Link>
					</li>
					<li>
						<Link href='/villa'>
							<a>Villa</a>
						</Link>
					</li>
					<li>
						<Link href='/hunian'>
							<a>Hunian</a>
						</Link>
					</li>
					{user ? (
						<>
							<li>
								<Link href='/events/add'>
									<a>Add Event</a>
								</Link>
							</li>
							<li>
								<Link href='/account/dashboard'>
									<a>Dashboard</a>
								</Link>
							</li>
							<li>
								<button
									onClick={() => logout()}
									className='btn-secondary btn-icon'
								>
									<FaSignOutAlt /> Logout
								</button>
							</li>
						</>
					) : (
						<>
							<li>
								<Link href='/auth/login'>
									<a className='btn-secondary btn-icon'>
										<FaSignInAlt /> Login
									</a>
								</Link>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	)
}