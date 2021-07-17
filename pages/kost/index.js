import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/Kost.module.css'

export default function Kost() {
	return (
		<Layout title='Kost'>
			<div>
				<h1>Kost</h1>
				<Link href='/kost/slug'>
					<a>Kost Detail</a>
				</Link>
			</div>
		</Layout>
	)
}