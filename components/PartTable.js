import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Table, Menu, Icon } from 'semantic-ui-react';
import TableHeader from './TableHeader';
import Row from './Row';
import Pagination from './Pagination';
import dummy from '../data/dummy';
import styles from '../styles/Home.module.css';

function exampleReducer(state, action) {
	if (action.type === 'CHANGE_SORT') {
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
	} else if (action.type === 'SEARCH' && action.search !== '') {
		return {
			...state,
			data: dummy.filter(
				(item) =>
					item.val.toLowerCase().includes(action.search) ||
					item.type.toLowerCase().includes(action.search)
			),
		};
	}
	return {
		...state,
		data: dummy,
	};
}

const renderBlanks = (dummy, end, rows) => {
	const blanks = [];
	if (end > dummy.length) {
		for (let i = 0; i < rows - (dummy.length % rows); i++) {
			blanks.push(<Row />);
		}
		return blanks;
	}
};

export default function PartTable(props) {
	const [rows, setRows] = useState(10);
	const [{ start, end }, setSlice] = useState({ start: 0, end: 10 });
	const [state, dispatch] = React.useReducer(exampleReducer, {
		column: null,
		data: dummy,
		direction: null,
	});
	useEffect(() => {
		setRows(props.rows);
		setSlice({ start: 0, end: props.rows });
	}, [props.rows]);

	const pageChange = (e, { children, icon }) => {
		if (typeof children === 'number') {
			setSlice({ start: (children - 1) * rows, end: children * rows });
		} else if (icon) {
			if (children.props.name === 'chevron left' && start > 0) {
				setSlice({ start: start - rows, end: end - rows });
			} else if (children.props.name === 'chevron right' && end < dummy.length) {
				setSlice({ start: start + rows, end: end + rows });
			}
		}
	};

	useEffect(() => {
		dispatch({ type: 'SEARCH', search: props.search });
	}, [props.search]);

	return (
		<Table
			unstackable
			sortable
			selectable
			size='small'
			compact='very'
			color={!props.dark ? 'blue' : null}
			celled
			inverted={props.dark}
			className={props.dark ? styles.partTableDark : styles.partTable}
		>
			<TableHeader state={state} dispatch={dispatch} />
			<Table.Body>
				{state.data.slice(start, end).map(({ val, num, type, size, mount, desc }, i) => (
					<Row key={i} num={num} val={val} type={type} size={size} mount={mount} desc={desc} />
				))}
				{renderBlanks(state.data, end, rows)}
			</Table.Body>
			<Table.Footer>
				<Table.Row>
					<Table.HeaderCell colSpan='6'>
						<Pagination
							dummy={dummy}
							rows={rows}
							pageChange={pageChange}
							slice={[start, end]}
							dark={props.dark}
						/>
					</Table.HeaderCell>
				</Table.Row>
			</Table.Footer>
		</Table>
	);
}
