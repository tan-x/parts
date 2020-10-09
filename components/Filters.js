import React, { useEffect, useState } from 'react';
import { Icon, Dropdown } from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';
import dummy from '../data/dummy';

export default function Filters({ open, setOpen }) {
	const [filters, setFilters] = useState({ types: [], packages: [], mounts: [] });
	const [select, setSelect] = useState({ type: '', package: '', mount: '' });

	useEffect(() => {
		const types = [...new Set(dummy.map((i) => i.type))].map((type) => ({
			key: type.toLowerCase(),
			text: type,
			value: type,
		}));
		const packages = [...new Set(dummy.map((i) => i.size))]
			.filter((pkg) => pkg !== null)
			.map((p) => ({
				key: p,
				text: p,
				value: p,
			}));
		const mounts = [...new Set(dummy.map((i) => i.mount))].map((type) => ({
			key: type.toLowerCase(),
			text: type,
			value: type,
		}));
		console.log(packages, types, mounts);
		setFilters({ ...filters, types: types, packages: packages, mounts: mounts });
	}, []);

	const selection = (e, { placeholder, value }) => {
		console.log(placeholder);
		switch (placeholder) {
			case 'Type':
				setSelect({ ...select, type: value });
				break;
			case 'Package':
				setSelect({ ...select, package: value });
				break;
			case 'Mount':
				setSelect({ ...select, mount: value });
				break;
			default:
				console.log('whoops');
		}
	};

	const clear = (e, { value }) => {
		console.log(value);
		switch (value) {
			case 'type':
				setSelect({ ...select, type: '' });
				break;
			case 'package':
				setSelect({ ...select, package: '' });
				break;
			case 'mount':
				setSelect({ ...select, mount: '' });
				break;
			default:
				console.log('whoops');
		}
	};

	return (
		<Fade collapse bottom when={open.filter}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					width: '90vw',
					margin: 4,
					maxWidth: 600,
				}}
			>
				<div style={{ width: 100, display: 'flex', justifyContent: 'center' }}>
					{select.type && <Icon name='x' value='type' onClick={clear} className='clickable' />}
					<Dropdown
						placeholder='Type'
						value={select.type}
						options={filters.types}
						onChange={selection}
					/>
				</div>
				<div style={{ width: 100, display: 'flex', justifyContent: 'center' }}>
					{select.package && <Icon name='x' value='package' onClick={clear} className='clickable' />}
					<Dropdown
						placeholder='Package'
						value={select.package}
						options={filters.packages}
						onChange={selection}
					/>
				</div>
				<div style={{ width: 100, display: 'flex', justifyContent: 'center' }}>
					{select.mount && <Icon name='x' value='mount' onClick={clear} className='clickable' />}
					<Dropdown
						placeholder='Mount'
						value={select.mount}
						options={filters.mounts}
						onChange={selection}
					/>
				</div>
			</div>
		</Fade>
	);
}
