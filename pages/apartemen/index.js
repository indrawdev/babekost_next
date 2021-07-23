import Link from 'next/link'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import styles from '@/styles/Apartemen.module.css'

export default function ApartemenPage({ posts }) {
	return (
		<Layout title='Apartemen'>
			<h1>Apartemen</h1>
			{posts.length === 0 && <h3>No data to show</h3>}
		</Layout>
	)
}

export async function getServerSideProps() {

	const res = await fetch(`${API_URL}/apartemen`)

	const data = await res.json()

	if (!data) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}

	return {
		props: {
			posts: data
		}
	}
}