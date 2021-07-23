import Head from 'next/head';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/styles/Layout.module.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charset='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
				<meta name='robots' content='index,follow' />
				<meta name='googlebot' content='index' />
			</Head>
			<Header />
			<div className={styles.container}>
				{children}
			</div>
			<ToastContainer />
			<Footer />
		</div>
	)
}