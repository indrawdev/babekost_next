import { useState } from 'react'
import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.css'

export default function ImageUpload({ evtId, imageUploaded }) {
	const [image, setImage] = useState(null)

	const handleSubmit = async (e) => {
		e.preventDefault()

		const formData = new FormData()

		formData.append('files', image)
		formData.append('ref', 'events')
		formData.append('refId', evtId)
		formData.append('field', 'image')

		const res = await fetch(`${API_URL}/upload`, {
			method: 'POST',
			body: formData
		})

		if (res.ok) {
			imageUploaded()
		}

	}

	const handleFileChange = (e) => {

	}

	return (
		<div>
			<h1>Upload</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<input type='file' onChange={handleFileChange} />
				</div>
				<input type='submit' value='Upload' />
			</form>
		</div>
	)
}