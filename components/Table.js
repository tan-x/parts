import React, { useState, useEffect } from 'react';
import { Table, Menu, Icon } from 'semantic-ui-react';
import Row from './Row';

export default function PartTable(props) {
    const [rows, setRows] = useState(10);
    const [slice, setSlice] = useState({ start: 0, end: 10 });
    useEffect(() => {
        setRows(props.rows);
        setSlice({start: 0, end: props.rows})
        console.log(props.rows)
    }, [props.rows])
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
			type: 'Capacitor',
			size: null,
			mount: 'THT',
		},
		{
			num: 20,
			val: '1k',
			type: 'Resistor',
			size: '0603',
			mount: 'SMD',
		},
		{
			num: 10,
			val: '2k',
			type: 'Resistor',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 8,
			val: '330pf',
			type: 'Capacitor',
			size: null,
			mount: 'THT',
		},
		{
			num: 2,
			val: 'STM32',
			type: 'IC',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 10,
			val: '200',
			type: 'Resistor',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 2,
			val: '100pf',
			type: 'Resistor',
			size: null,
			mount: 'THT',
		},
		{
			num: 1,
			val: 'STM64',
			type: 'IC',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 2,
			val: 'T101',
			type: 'IC',
			size: '0806',
			mount: 'THT',
        },
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
			type: 'Capacitor',
			size: null,
			mount: 'THT',
		},
		{
			num: 20,
			val: '1k',
			type: 'Resistor',
			size: '0603',
			mount: 'SMD',
		},
		{
			num: 10,
			val: '2k',
			type: 'Resistor',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 8,
			val: '330pf',
			type: 'Capacitor',
			size: null,
			mount: 'THT',
		},
		{
			num: 2,
			val: 'STM32',
			type: 'IC',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 10,
			val: '200',
			type: 'Resistor',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 2,
			val: '100pf',
			type: 'Resistor',
			size: null,
			mount: 'THT',
		},
		{
			num: 1,
			val: 'STM64',
			type: 'IC',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 2,
			val: 'T101',
			type: 'IC',
			size: '0806',
			mount: 'THT',
        },
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
			type: 'Capacitor',
			size: null,
			mount: 'THT',
		},
		{
			num: 20,
			val: '1k',
			type: 'Resistor',
			size: '0603',
			mount: 'SMD',
		},
		{
			num: 10,
			val: '2k',
			type: 'Resistor',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 8,
			val: '330pf',
			type: 'Capacitor',
			size: null,
			mount: 'THT',
		},
		{
			num: 2,
			val: 'STM32',
			type: 'IC',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 10,
			val: '200',
			type: 'Resistor',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 2,
			val: '100pf',
			type: 'Resistor',
			size: null,
			mount: 'THT',
		},
		{
			num: 1,
			val: 'STM64',
			type: 'IC',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 2,
			val: 'T101',
			type: 'IC',
			size: '0806',
			mount: 'THT',
        },
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
			type: 'Capacitor',
			size: null,
			mount: 'THT',
		},
		{
			num: 20,
			val: '1k',
			type: 'Resistor',
			size: '0603',
			mount: 'SMD',
		},
		{
			num: 10,
			val: '2k',
			type: 'Resistor',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 8,
			val: '330pf',
			type: 'Capacitor',
			size: null,
			mount: 'THT',
		},
		{
			num: 2,
			val: 'STM32',
			type: 'IC',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 10,
			val: '200',
			type: 'Resistor',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 2,
			val: '100pf',
			type: 'Resistor',
			size: null,
			mount: 'THT',
		},
		{
			num: 1,
			val: 'STM64',
			type: 'IC',
			size: '0806',
			mount: 'SMD',
		},
		{
			num: 2,
			val: 'T101',
			type: 'IC',
			size: '0806',
			mount: 'THT',
		},
	];

	const pageChange = (e, { children, icon }) => {
		if (typeof children === 'number') {
			setSlice({ start: children === 1 ? 0 : (children - 1) * rows, end: children * rows });
		} else if (icon) {
			if (children.props.name === 'chevron left' && slice.start > 0) {
				setSlice({ start: slice.start - rows, end: slice.end - rows });
			} else if (children.props.name === 'chevron right' && slice.end < dummy.length) {
				setSlice({ start: slice.start + rows, end: slice.end + rows });
			}
		}
	};

	const renderPaginations = () => {
		const pages = [];
		for (let i = 0; i < Math.ceil(dummy.length / rows); i++) {
			pages.push(
				<Menu.Item as='a' key={i} onClick={pageChange} active={slice.start / rows === (i)}>
					{i + 1}
				</Menu.Item>
			);
		}
		return pages;
	};

	return (
		<Table unstackable compact='very' size='small' celled selectable inverted padded sortable>
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
				{dummy.slice(slice.start, slice.end).map((item, i) => (
					<Row
						key={i}
						num={item.num}
						val={item.val}
						type={item.type}
						size={item.size}
						mount={item.mount}
					/>
				))}
			</Table.Body>
			<Table.Footer>
				<Table.Row>
					<Table.HeaderCell colSpan='5'>
						<Menu floated='right' pagination size='mini' inverted>
							<Menu.Item as='a' icon onClick={pageChange}>
								<Icon name='chevron left' />
							</Menu.Item>
							{renderPaginations()}
							<Menu.Item as='a' icon onClick={pageChange}>
								<Icon name='chevron right' />
							</Menu.Item>
						</Menu>
					</Table.HeaderCell>
				</Table.Row>
			</Table.Footer>
		</Table>
	);
}
