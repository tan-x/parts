import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export default function PaginationArrow({ pageChange, dir }) {
	return (
		<Menu.Item as='a' icon onClick={pageChange}>
			<Icon name={`chevron ${dir}`} />
		</Menu.Item>
	);
}
