import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import ImageUpload from '@/components/ImageUpload'
import { parseCookies } from '@/helpers/index'
import { API_URL } from '@/config/index'
import { toast } from 'react-toastify'
import styles from '@/styles/Form.module.css'

export default function EditApartemenPage({ post, token }) {

	const [values, setValues] = useState({
		name: post.name,
		performers: post.performers,
		venue: post.venue,
		address: post.address,
		date: post.date,
		time: post.time,
		description: post.description,
	})

	const router = useRouter()

	const handleSubmit = async (e) => {
		e.preventDefault()

		const res = await fetch(`${API_URL}/apartement/${post.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(values),
		})

		if (!res.ok) {
			if (res.status === 403 || res.status === 401) {
				toast.error('Unauthorized')
				return
			}
			toast.error('Something Went Wrong')
		} else {
			const post = await res.json()
			router.push(`/apartemen/${post.slug}`)
		}
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}

	const imageUploaded = async (e) => {
		const res = await fetch(`${API_URL}/apartemen/${post.id}`)
		const data = await res.json()
		setImagePreview(data.image.formats.thumbnail.url)
		setShowModal(false)
	}

	return (
		<Layout title='Add New Apartemen'>
			<Link href='/apartemen'>Go Back</Link>
			<h1>Edit Apartemen</h1>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.grid}>
					<div>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							name='name'
							value={values.name}
							onChange={handleInputChange}
						/>
					</div>
				</div>
			</form>
		</Layout>
	)

}