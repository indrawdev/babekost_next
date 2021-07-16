import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import styles from '@/styles/Home.module.css'

export default function HomePage() {
  return (
    <Layout title='Depan'>
      <div className={styles.container}>
        <h1>Depan</h1>
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