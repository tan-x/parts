import { useState } from 'react';
import Head from 'next/head';
import Table from '../components/Table';
import styles from '../styles/Home.module.css';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
const options = [10, 20, 50];
const rowOptions = options.map((i) => ({
	key: i,
	text: i,
	value: i,
}));

export default function Home() {
	const [rows, setRows] = useState(10);

	const rowChange = (e, { value }) => {
    setRows(value);
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>Parts</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Parts</h1>
        <span>Rows</span>
				<Dropdown
          compact
					selection
					defaultValue={rows}
					options={rowOptions}
					onChange={rowChange}
				/>
				<Table rows={rows}/>
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					Powered by <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
				</a>
			</footer>
		</div>
	);
}
