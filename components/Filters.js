import React, { useEffect, useState } from 'react';
import { Icon, Dropdown } from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';
import dummy from '../data/dummy';

export function Filters({ open, select }) {
	const [filters, setFilters] = useState({ types: [], packages: [], mounts: [] });
	// const [select, setSelect] = useState({ type: '', package: '', mount: '' });

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
		setFilters({ ...filters, types: types, packages: packages, mounts: mounts });
	}, []);

	const selection = (e, { placeholder, value }) => {
		switch (placeholder) {
			case 'Type':
				select[1]({ ...select[0], type: value });
				break;
			case 'Package':
				select[1]({ ...select[0], package: value });
				break;
			case 'Mount':
				select[1]({ ...select[0], mount: value });
				break;
			default:
				console.log('whoops');
		}
	};

	const clear = (e, {value}) => {
		switch (value) {
			case 'type':
				select[1]({ ...select[0], type: '' });
				break;
			case 'package':
				select[1]({ ...select[0], package: '' });
				break;
			case 'mount':
				select[1]({ ...select[0], mount: '' });
				break;
			default:
				console.log('whoops');
		}
	};

	return (
		<Fade collapse duration={400} bottom when={open.filter}>
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
					{select[0].type && <Icon name='x' value='type' onClick={clear} className='clickable' />}
					<Dropdown
						placeholder='Type'
						value={select[0].type}
						options={filters.types}
						onChange={selection}
					/>
				</div>
				<div style={{ width: 100, display: 'flex', justifyContent: 'center' }}>
					{select[0].package && <Icon name='x' value='package' onClick={clear} className='clickable' />}
					<Dropdown
						placeholder='Package'
						value={select[0].package}
						options={filters.packages}
						onChange={selection}
					/>
				</div>
				<div style={{ width: 100, display: 'flex', justifyContent: 'center' }}>
					{select[0].mount && <Icon name='x' value='mount' onClick={clear} className='clickable' />}
					<Dropdown
						placeholder='Mount'
						value={select[0].mount}
						options={filters.mounts}
						onChange={selection}
					/>
				</div>
			</div>
		</Fade>
	);
}
