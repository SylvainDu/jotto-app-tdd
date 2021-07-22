import { shallow, ShallowWrapper } from 'enzyme';
import CongratsComponent from './congrats-component';
import { findByTestAttr } from '../../test/testUtils';

let wrapper: ShallowWrapper;
let congratsComponent: ShallowWrapper;

describe('CongratsComponent with success', () => {
    beforeEach(() => {
        wrapper = shallow(<CongratsComponent success={true}/>);
    });

    test('renders without error', () => {
        congratsComponent = findByTestAttr(wrapper, 'congratsComponent');
        expect(congratsComponent.length).toBe(1);
    });

    test('renders text when success is true', () => {
        congratsComponent = findByTestAttr(wrapper, 'congratsMessageComponent');
        const message: string = 'Congratulations! you guessed the word!';
        expect(congratsComponent.text()).toBe(message);
    });
});

describe('CongratsComponent without success', () => {
    beforeEach(() => {
        wrapper = shallow(<CongratsComponent success={false}/>)
        congratsComponent = findByTestAttr(wrapper, 'congratsComponent');
    });

    test('renders no text when success is fail', () => {
        expect(congratsComponent.text()).toBe('');
    });
});
