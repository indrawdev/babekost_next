import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import styles from '@/styles/Post.module.css'

export default function ApartemenDetail({ post }) {

	const router = useRouter()

	return (
		<Layout title={post.name}>
			<div className={styles.post}>
				<h1>{post.name}</h1>
				{post.image && (
					<div className={styles.image}>
						<Image
							src={post.image.formats.medium.url}
							width={960}
							height={600}
						/>
					</div>
				)}
				{/* <h3>Performers:</h3>
				<p>{post.performers}</p>
				<h3>Description:</h3>
				<p>{post.description}</p>
				<h3>Venue: {post.venue}</h3>
				<p>{post.address}</p> */}
				<Link href='/apartemen'>
					<a className={styles.back}>{'<'} Go Back</a>
				</Link>
			</div>
		</Layout>
	)
}

export async function getServerSideProps({ query: { slug } }) {

	const res = await fetch(`${API_URL}/apartemen?slug=${slug}`)

	const data = await res.json()

	if (!data) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			post: data[0],
		}
	}
}