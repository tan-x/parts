import { useState } from 'react';
import Head from 'next/head';
import Table from '../components/Table';
import 'semantic-ui-css/semantic.min.css';
import styles from '../styles/Home.module.css';
import { Dropdown, Checkbox } from 'semantic-ui-react';
const options = [10, 20, 50];
const rowOptions = options.map((i) => ({
	key: i,
	text: i,
	value: i,
}));

export default function Home() {
	const [rows, setRows] = useState(10);
	const [dark, setDark] = useState(false);

	const rowChange = (e, { value }) => {
		setRows(value);
	};
	return (
		<div className={!dark ? styles.container : styles.dark}>
			<Head>
				<title>Parts</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header className={styles.header}>
				<span style={{margin: 10, color: dark && 'white'}}>Dark Mode</span>
				<Checkbox toggle onChange={() => setDark(!dark)} />
			</header>

			<main className={styles.main}>
				<h1 className={styles.title} style={{color: dark && 'white'}}>Parts</h1>
				<span style={{margin: 10, color: dark && 'white'}}>Rows</span>
				<Dropdown compact selection defaultValue={rows} options={rowOptions} onChange={rowChange} />
				<Table rows={rows} dark={dark} />
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
          rel='noopener noreferrer'
          style={{color: dark && 'white'}}
				>
					Powered by <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo}/>
				</a>
			</footer>
		</div>
	);
}
