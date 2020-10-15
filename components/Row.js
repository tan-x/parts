import React from 'react';
import { Table } from 'semantic-ui-react';

export function Row({ num, val, type, size, mount, desc }) {
	return (
		<Table.Row style={{ height: 29 }}>
			<Table.Cell>{num}</Table.Cell>
			<Table.Cell>{val}</Table.Cell>
			<Table.Cell>{type}</Table.Cell>
			<Table.Cell>{size}</Table.Cell>
			<Table.Cell>{mount}</Table.Cell>
			<Table.Cell>{desc}</Table.Cell>
		</Table.Row>
	);
}
