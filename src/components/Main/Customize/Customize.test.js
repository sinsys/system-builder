import React from 'react';
import ReactDOM from 'react-dom';
import Customize from './Customize';

describe('Customize Component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Customize />, div);
		ReactDOM.unmountComponentAtNode(div);
	})
});