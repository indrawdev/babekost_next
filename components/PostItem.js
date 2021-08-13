import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/PostItem.module.css'

export default function PostItem({ post }) {
  return (
    <div className={styles.post}>
      <div className={styles.img}>
        <Image
          src={
            post.image
              ? post.image.formats.thumbnail.url
              : '/images/post-default.png'
          }
          width={170}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span>
          {new Date(post.date).toLocaleDateString('en-US')} at {post.time}
        </span>
        <h3>{post.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${post.slug}`}>
          <a className='btn'>Details</a>
        </Link>
      </div>
    </div>
  )
}