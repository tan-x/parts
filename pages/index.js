import { useState, useEffect } from 'react';
import Head from 'next/head';
import { PartTable, Filters } from '../components';
import 'semantic-ui-css/semantic.min.css';
import styles from '../styles/Home.module.css';
import { Dropdown, Checkbox, Input, Button, Icon } from 'semantic-ui-react';
import dummy from '../data/dummy';
import { set } from 'lodash';

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
	const [select, setSelect] = useState({ type: '', package: '', mount: '' });
	const [modal, setModal] = useState({ filter: false });
	const [parts, setParts] = useState(dummy);
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

	useEffect(() => {
		if (modal.filter) {
			const filtered = dummy.filter((item) => item.type === 'Resistor');
			console.log(filtered);
			setParts(filtered);
		}
	}, [select]);

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

				<Filters open={modal} select={[select, setSelect]} />
				<PartTable rows={rows} dark={dark} search={search} parts={[parts, setParts]} />
			</main>
		</div>
	);
}
