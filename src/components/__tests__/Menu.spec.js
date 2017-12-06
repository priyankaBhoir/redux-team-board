import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import Menu from '../Menu';


// Snapshot for Component
// not working for now 
// https://github.com/manoj-nama/create-react-app-redux#experimental-snapshot-testing
/*describe('Menu --- Snapshot',()=>{
    it('+++capturing Snapshot of Menu', () => {
        const renderedValue =  renderer.create(<Menu title="name" type="buttonMenu"/>).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});*/

///*******************************************************************************************************
/*describe('Shallow Render REACT COMPONENTS :: MEnu',()=>{
    let wrapper

    beforeEach(()=>{
        wrapper = shallow(<Menu title="filters(0)"> <div /> </Menu>)
        
    })
    it('--- renders without crashing', () => {
      shallow(<Menu title="filters(0)" />);
    });

    it('--- contains header - menu button', () => {
        expect(wrapper.find('.menu-btn').length).toEqual(1);
    });
    it('--- contains a given title', () => {
        expect(wrapper.find('.menu-btn').at(0).toEqual("filters(0)"));
    });

    it('--- updates state when header is clicked', () => {
    });
});*/
