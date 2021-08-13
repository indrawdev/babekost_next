import Link from 'next/link'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import styles from '@/styles/Dashboard.module.css'

export default function Dashboard({ post, handleDelete }) {
  return (
    <div className={styles.post}>
      <h4>
        <Link href={`/posts/${post.slug}`}>
          <a>{post.name}</a>
        </Link>
      </h4>
      <Link href={`/posts/edit/${post.id}`}>
        <a className={styles.edit}>
          <FaPencilAlt /> <span>Edit</span>
        </a>
      </Link>
      <a
        href='#'
        className={styles.delete}
        onClick={() => handleDelete(post.id)}
      >
        <FaTimes /> <span>Delete</span>
      </a>
    </div>
  )
}