import { ShallowWrapper } from 'enzyme';

export const findByTestAttr = (wrapper: ShallowWrapper, value: string): ShallowWrapper => {
    return wrapper.find(`[data-test='${value}']`);
}
