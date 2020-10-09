import { render, screen } from '@testing-library/react';
import Row from '../Row';

const dummy = {
	num: '20',
	val: '20k',
	type: 'Resistor',
	size: '0806',
	mount: 'SMD',
};
describe('Row', () => {
	it('renders without crashing', () => {
		const { container, debug } = render(<Row />);
		expect(screen.getByRole('row')).toBeInTheDocument();
	});
	it('renders data from props', () => {
		const { container, debug } = render(
			<Row num={dummy.num} val={dummy.val} type={dummy.type} size={dummy.size} mount={dummy.mount} />
        );
        for (const key in dummy) {
            expect.stringContaining(dummy[key])
        }
	});
});
