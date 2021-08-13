import Link from 'next/link'
import Layout from '@/components/Layout'
import Message from '@/components/Message'
import PostItem from '@/components/PostItem'
import { toast } from 'react-toastify'
import { API_URL } from '@/config/index'


export default function HomePage() {
  const displayMsg = () => {
    toast.error(<Message message='Hello' />)
  }

  return (
    <Layout title='Depan'>
      <h1>Upcoming</h1>
      {posts.length === 0 && <h3>No posts to show</h3>}

      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}

      {posts.length > 0 && (
        <Link href='/posts'>
          <a className='btn-secondary'>View All Posts</a>
        </Link>
      )}

      <div>
        <button onClick={displayMsg}>Click me</button>
      </div>
    </Layout>
  )
}


export async function getStaticProps() {
  const res = await fetch(`${API_URL}/posts`)
  const posts = await res.json()

  return {
    props: { posts },
    revalidate: 1,
  }
}