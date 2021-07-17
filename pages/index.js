import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/Home.module.css'

export default function HomePage() {
  return (
    <Layout title='Depan'>
      <div className={styles.container}>
        <h1>Depan</h1>
        <Link href='kost'>
          <a>Kost</a>
        </Link>
        <Link href='apartemen'>
          <a>Apartemen</a>
        </Link>
        <Link href='villa'>
          <a>Villa</a>
        </Link>
        <Link href='hunian'>
          <a>Hunian</a>
        </Link>
        <Link href='/auth/login'>
          <a>Login</a>
        </Link>
        <Link href='/auth/register'>
          <a>Register</a>
        </Link>
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