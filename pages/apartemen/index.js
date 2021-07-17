import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/Apartemen.module.css'

export default function ApartemenPage() {
	return (
		<Layout title='Apartemen'>
			<div>
				<h1>Apartemen</h1>
				<Link href='/apartemen/slug'>
					<a>Slug</a>
				</Link>
			</div>
		</Layout>
	)
}