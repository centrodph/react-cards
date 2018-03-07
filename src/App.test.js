import React from 'react';
import renderer from 'react-test-renderer';
import { expect as chaiExpect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';

test('Render App', () => {
	const component = renderer.create(<App />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

describe('Render app', () => {
	it('renders three <Foo /> components', () => {
		const component = renderer.create(<App />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders an `.App-title`', () => {
		const wrapper = shallow(<App />);
		chaiExpect(wrapper.find('.App-title')).to.have.length(1);
	});
});
