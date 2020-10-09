import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Table, Menu, Icon } from 'semantic-ui-react';
import TableHeader from './TableHeader';
import Row from './Row';
import Pagination from './Pagination';
import dummy from '../data/dummy';
import styles from '../styles/Home.module.css';

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

const renderBlanks = (dummy, slice, rows) => {
	const blanks = [];
	if (slice.end > dummy.length) {
		for (let i = 0; i < rows - (dummy.length % rows); i++) {
			blanks.push(<Row />);
		}
		return blanks;
	}
};

export default function PartTable(props) {
	const [rows, setRows] = useState(10);
	const [slice, setSlice] = useState({ start: 0, end: 10 });
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
			setSlice({ start: children === 1 ? 0 : (children - 1) * rows, end: children * rows });
		} else if (icon) {
			if (children.props.name === 'chevron left' && slice.start > 0) {
				setSlice({ start: slice.start - rows, end: slice.end - rows });
			} else if (children.props.name === 'chevron right' && slice.end < dummy.length) {
				setSlice({ start: slice.start + rows, end: slice.end + rows });
			}
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
			className={props.dark ? styles.partTableDark : styles.partTable}
		>
			<TableHeader state={state} dispatch={dispatch} />
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
				{renderBlanks(dummy, slice, rows)}
			</Table.Body>
			<Table.Footer>
				<Table.Row>
					<Table.HeaderCell colSpan='6'>
						<Pagination
							dummy={dummy}
							rows={rows}
							pageChange={pageChange}
							slice={slice}
							dark={props.dark}
						/>
					</Table.HeaderCell>
				</Table.Row>
			</Table.Footer>
		</Table>
	);
}
