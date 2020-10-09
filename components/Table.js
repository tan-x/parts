import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Table, Menu, Icon } from 'semantic-ui-react';
import Row from './Row';

const dummy = [
	{
		num: 20,
		val: '20 kΩ',
		type: 'Resistor',
		size: '0806',
		mount: 'SMD',
	},
	{
		num: 10,
		val: '10 kΩ',
		type: 'Resistor',
		size: '0806',
		mount: 'SMD',
	},
	{
		num: 8,
		val: '2200 pf',
		type: 'Capacitor',
		size: null,
		mount: 'THT',
	},
	{
		num: 20,
		val: '1 kΩ',
		type: 'Resistor',
		size: '0603',
		mount: 'SMD',
	},
	{
		num: 10,
		val: '2 kΩ',
		type: 'Resistor',
		size: '0806',
		mount: 'SMD',
	},
	{
		num: 8,
		val: '330 pf',
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
		val: '100 pf',
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
		val: '20 kΩ',
		type: 'Resistor',
		size: '0806',
		mount: 'SMD',
	},
	{
		num: 10,
		val: '10 kΩ',
		type: 'Resistor',
		size: '0806',
		mount: 'SMD',
	},
	{
		num: 8,
		val: '2200 pf',
		type: 'Capacitor',
		size: null,
		mount: 'THT',
	},
	{
		num: 20,
		val: '1 kΩ',
		type: 'Resistor',
		size: '0603',
		mount: 'SMD',
	},
	{
		num: 10,
		val: '2 kΩ',
		type: 'Resistor',
		size: '0806',
		mount: 'SMD',
	},
	{
		num: 8,
		val: '330 pf',
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
		val: '100 pf',
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
		val: '20 kΩ',
		type: 'Resistor',
		size: '0806',
		mount: 'SMD',
	},
	{
		num: 10,
		val: '10 kΩ',
		type: 'Resistor',
		size: '0806',
		mount: 'SMD',
	},
	{
		num: 8,
		val: '2200 µf',
		type: 'Capacitor',
		size: null,
		mount: 'THT',
	},
	{
		num: 20,
		val: '1 kΩ',
		type: 'Resistor',
		size: '0603',
		mount: 'SMD',
	},
	{
		num: 10,
		val: '2 kΩ',
		type: 'Resistor',
		size: '0806',
		mount: 'SMD',
	},
	{
		num: 8,
		val: '330 pf',
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
		val: '100 pf',
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
		val: '20 kΩ',
		type: 'Resistor',
		size: '0806',
		mount: 'SMD',
	},
	{
		num: 10,
		val: '10 kΩ',
		type: 'Resistor',
		size: '0806',
		mount: 'SMD',
	},
	{
		num: 8,
		val: '2200 pf',
		type: 'Capacitor',
		size: null,
		mount: 'THT',
	},
	{
		num: 20,
		val: '1 kΩ',
		type: 'Resistor',
		size: '0603',
		mount: 'SMD',
	},
	{
		num: 10,
		val: '2 kΩ',
		type: 'Resistor',
		size: '0806',
		mount: 'SMD',
	},
	{
		num: 8,
		val: '330 µf',
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
		val: '100 µf',
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

function exampleReducer(state, action) {
	switch (action.type) {
		case 'CHANGE_SORT':
			if (state.column === action.column) {
				return {
					...state,
					data: state.data.reverse(),
					direction: state.direction === 'ascending' ? 'descending' : 'ascending',
				};
			}

			return {
				column: action.column,
				data: _.sortBy(state.data, [action.column]),
				direction: 'ascending',
			};
		default:
			throw new Error();
	}
}

export default function PartTable(props) {
	const [rows, setRows] = useState(10);
	const [slice, setSlice] = useState({ start: 0, end: 10 });
	const [state, dispatch] = React.useReducer(exampleReducer, {
		column: null,
		data: dummy,
		direction: null,
	});
	const { column, data, direction } = state;
	useEffect(() => {
		setRows(props.rows);
		setSlice({ start: 0, end: props.rows });
		console.log(props.rows);
	}, [props.rows]);

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
				<Menu.Item as='a' key={i} onClick={pageChange} active={slice.start / rows === i}>
					{i + 1}
				</Menu.Item>
			);
		}
		return pages;
	};

	const renderBlanks = () => {
		console.log(dummy.length, dummy.length % rows);
		const blanks = [];
		if (slice.end > dummy.length) {
			for (let i = 0; i < rows - (dummy.length % rows); i++) {
				blanks.push(<Row />);
			}
			return blanks;
		}
	};

	return (
		<Table
            unstackable
            color={!props.dark ? 'blue' : 'black'}
			compact='very'
			size='small'
			celled
			selectable
			inverted={props.dark}
			padded
			sortable
			style={{ height: 450, maxWidth: 640, boxShadow: `1px 1px 10px ${props.dark ? 'black' : 'lightgrey'}`}}
		>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell
						width={1}
						sorted={column === 'num' ? direction : null}
						onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'num' })}
					>
						#
					</Table.HeaderCell>
					<Table.HeaderCell
						width={2}
						sorted={column === 'val' ? direction : null}
						onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'val' })}
					>
						Value
					</Table.HeaderCell>
					<Table.HeaderCell
						width={2}
						sorted={column === 'type' ? direction : null}
						onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'type' })}
					>
						Type
					</Table.HeaderCell>
					<Table.HeaderCell
						width={1}
						sorted={column === 'size' ? direction : null}
						onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'size' })}
					>
						Package Size
					</Table.HeaderCell>
					<Table.HeaderCell
						width={2}
						sorted={column === 'mount' ? direction : null}
						onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'mount' })}
					>
						Mount
					</Table.HeaderCell>
					<Table.HeaderCell width={3} disabled>
						Description
					</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{state.data.slice(slice.start, slice.end).map((item, i) => (
					<Row
						key={i}
						num={item.num}
						val={item.val}
						type={item.type}
						size={item.size}
						mount={item.mount}
						desc={item.desc}
					/>
				))}
				{renderBlanks()}
			</Table.Body>
			<Table.Footer>
				<Table.Row>
					<Table.HeaderCell colSpan='6'>
						<Menu floated='right' pagination size='mini' inverted={props.dark}>
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
