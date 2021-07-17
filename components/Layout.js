import Head from 'next/head';

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
			{children}
		</div>
	)
}