import React from 'react';
import renderer from 'react-test-renderer';
import { expect as chaiExpect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';
import Routes from '../config/Routes';

describe('Render app', () => {
    // it('check snapshot tree', () => {
    //     const component = renderer.create(<App route={Routes} />);
    //     let tree = component.toJSON();
    //     expect(tree).toMatchSnapshot();
    // });
    it('renders title', () => {
        const wrapper = shallow(<App route={Routes} />);
        chaiExpect(wrapper.find('Header')).to.have.length(1);
    });
    it('check container className component', () => {
        const wrapper = shallow(<App route={Routes} />);
        chaiExpect(wrapper.find('.component-app')).to.have.length(1);
    });
});
