import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import styles from '@/styles/Villa.module.css'

export default function VillaDetail() {
	return (
		<Layout title='Villa Detail'>
			<div>
				<h1>Villa Detail</h1>
			</div>
		</Layout>
	)
}

export async function getStaticPaths() {
	const res = await fetch(`${API_URL}/api/events`)
	const events = await res.json()

	const paths = events.map((evt) => ({
		params: { slug: evt.slug }
	}))
}

export async function getStaticProps() {

}