import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'

export default function NotFoundPage() {
	return (
		<Layout title='Page not found'>
			<div>
				<h1>Page not found</h1>
			</div>
		</Layout>
	)
}