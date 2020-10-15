import React from 'react';
import { Table } from 'semantic-ui-react';

export function TableHeader({ state, dispatch }) {
	const { column, direction } = state;
	const cells = [
		{ value: 'num', text: '#', width: 1 },
		{ value: 'val', text: 'Value', width: 2 },
		{ value: 'type', text: 'Type', width: 2 },
		{ value: 'size', text: 'Package', width: 1 },
		{ value: 'mount', text: 'Mount', width: 2 },
		{ value: '', text: 'Description', width: 3 },
	];

	const changeSort = (val) => {
		if (val !== '') {
			dispatch({ type: 'CHANGE_SORT', column: val });
		}
	};
	return (
		<Table.Header>
			<Table.Row>
				{cells.map(({ value, text, width }, i) => (
					<Table.HeaderCell
						key={i}
						width={width}
						sorted={column === value ? direction : null}
						onClick={() => changeSort(value)}
					>
						{text}
					</Table.HeaderCell>
				))}
			</Table.Row>
		</Table.Header>
	);
}
