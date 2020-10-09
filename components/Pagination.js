import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import PaginationArrow from './PaginationArrow';

export default function Pagination({ dummy, rows, slice, pageChange, dark }) {
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

	return (
		<Menu floated='right' pagination size='mini' inverted={dark}>
			<PaginationArrow dir={'left'} pageChange={pageChange} />
			{renderPaginations()}
			<PaginationArrow dir={'right'} pageChange={pageChange} />
		</Menu>
	);
}
