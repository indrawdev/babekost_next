import Layout from "@/components/layout"
import { API_URL } from '@/config/index'

export default function VillaDetail() {
	return (
		<Layout>
			<div>

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