import {shallow, ShallowWrapper} from "enzyme";
import InputComponent from "./input-component";
import {findByTestAttr} from "../../../test/testUtils";

describe('InputComponent', () => {
    let wrapper: ShallowWrapper;
    let inputComponent: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<InputComponent/>);
    });

    test('should return without error', () => {
       inputComponent =  findByTestAttr(wrapper, 'input-component');
       expect(inputComponent.length).toBe(1);
    });
});
