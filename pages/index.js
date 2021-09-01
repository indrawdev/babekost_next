import Link from 'next/link'
import Layout from '@/components/Layout'
import PostItem from '@/components/PostItem'
import { toast } from 'react-toastify'


export default function HomePage() {

  return (
    <Layout title='Depan'>
      <div className="container mx-auto">
        <button className="focus:ring-2 focus:ring-red-500">
          Ring on focus
        </button>
      </div>
    </Layout>
  )
}