import React from 'react';
import { Table } from 'semantic-ui-react';

export default function Row({ num, val, type, size, mount }) {
	return (
		<Table.Row>
			<Table.Cell>{num}</Table.Cell>
			<Table.Cell>{val}</Table.Cell>
			<Table.Cell>{type}</Table.Cell>
			<Table.Cell>{size}</Table.Cell>
			<Table.Cell>{mount}</Table.Cell>
		</Table.Row>
	);
}
