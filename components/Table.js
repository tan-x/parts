import React from 'react';
import { Table, Menu, Icon } from 'semantic-ui-react';
import Row from './Row';

export default function PartTable(props) {
	const dummy = [
		{
			num: 20,
			val: '20k',
			type: 'Resistor',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 10,
			val: '10k',
			type: 'Resistor',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 8,
			val: '2200pf',
			type: 'Resistor',
			size: null,
			mount: 'THT',
		},
	];

	return (
		<Table unstackable fixedcollapsing="true" compact='very' size='small' celled selectable>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell width={1}>#</Table.HeaderCell>
					<Table.HeaderCell width={2}>Value</Table.HeaderCell>
					<Table.HeaderCell width={2}>Type</Table.HeaderCell>
					<Table.HeaderCell width={1}>Package Size</Table.HeaderCell>
					<Table.HeaderCell width={2}>Mount</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{dummy.map((item, i) => (
					<Row key={i} num={item.num} val={item.val} type={item.type} size={item.size} mount={item.mount} />
				))}
			</Table.Body>
			<Table.Footer>
				<Table.Row>
					<Table.HeaderCell colSpan='5'>
						<Menu floated='right' pagination size='mini'>
							<Menu.Item as='a' icon>
								<Icon name='chevron left' />
							</Menu.Item>
							<Menu.Item as='a'>1</Menu.Item>
							<Menu.Item as='a'>2</Menu.Item>
							<Menu.Item as='a'>3</Menu.Item>
							<Menu.Item as='a'>4</Menu.Item>
							<Menu.Item as='a' icon>
								<Icon name='chevron right' />
							</Menu.Item>
						</Menu>
					</Table.HeaderCell>
				</Table.Row>
			</Table.Footer>
		</Table>
	);
}
