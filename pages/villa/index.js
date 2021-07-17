import Link from 'next/link'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import styles from '@/styles/Villa.module.css'

export default function Villa() {
	return (
		<Layout title='Villa'>
			<div>
				<h1>Villa</h1>
				<Link href='/villa/slug'>
					<a>Villa Detail</a>
				</Link>
			</div>
		</Layout>
	)
}