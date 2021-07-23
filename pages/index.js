import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Message from '@/components/Message'
import { toast } from 'react-toastify'


export default function HomePage() {
  const displayMsg = () => {
    toast.error(<Message message='Hello' />)
  }

  return (
    <Layout title='Depan'>
      <div>
        <button onClick={displayMsg}>Click me</button>
      </div>
    </Layout>
  )
}


export async function getStaticProps() {

  return {
    props: {},
    revalidate: 1
  }
}