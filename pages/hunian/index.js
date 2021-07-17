import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/Hunian.module.css'

export default function HunianPage() {
	return (
		<Layout title='Hunian'>
			<div>
				<h1>Hunian</h1>
				<Link href='/hunian/slug'>
					<a>Hunian Detail</a>
				</Link>
			</div>
		</Layout>
	)
}