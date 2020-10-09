import { useState } from 'react';
import Head from 'next/head';
import Table from '../components/PartTable';
import Filters from '../components/Filters';
import 'semantic-ui-css/semantic.min.css';
import styles from '../styles/Home.module.css';
import { Dropdown, Checkbox, Input, Button, Icon } from 'semantic-ui-react';
const options = [10, 20, 50];
const rowOptions = options.map((i) => ({
	key: i,
	text: i,
	value: i,
}));

export default function Home() {
	const [rows, setRows] = useState(10);
	const [dark, setDark] = useState(false);
	const [search, setSearch] = useState('');
	const [modal, setModal] = useState({ filter: false });
	const rowChange = (e, { value }) => {
		setRows(value);
	};
	const searchChange = ({ target }) => {
		let searchValue;
		if (typeof target.value === 'number') {
			searchValue = parseInt(target.value);
		} else {
			searchValue = target.value.toLowerCase();
		}
		setSearch(searchValue);
	};

	const filterModal = (e) => {
		setModal({ ...modal, filter: !modal.filter });
	};
	return (
		<div className={!dark ? styles.container : styles.dark}>
			<Head>
				<title>Parts</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header className={styles.header}>
				<span style={{ margin: 10, color: dark && 'white' }}>Dark Mode</span>
				<Checkbox toggle onChange={() => setDark(!dark)} />
			</header>
			<main className={styles.main}>
				<h1 className={styles.title} style={{ color: dark && 'white', marginBottom: 10 }}>
					Parts
				</h1>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '95vw',
						maxWidth: '600px',
						height: 40,
					}}
				>
					<Button size='mini' compact onClick={filterModal}>
						<Icon name='filter' />
						Filter
					</Button>
					<Input placeholder='Search' value={search} onChange={searchChange} />
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<span style={{ margin: 5, color: dark && 'white' }}>Rows</span>
						<Dropdown compact selection defaultValue={rows} options={rowOptions} onChange={rowChange} />
					</div>
				</div>

				<Filters open={modal} setOpen={setModal} />
				<Table rows={rows} dark={dark} search={search} />
			</main>
		</div>
	);
}
