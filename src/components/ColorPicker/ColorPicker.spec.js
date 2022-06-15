/* eslint-disable react/jsx-props-no-spreading */
import renderer from 'react-test-renderer';

import { ColorPicker } from './index';

describe('ColorPicker', () => {
  it('renders correctly closed state', () => {
    const props = {
      onChange: jest.fn(),
      color: 'red',
      opened: false,
    };
    const component = renderer.create(<ColorPicker {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it('renders correctly open state', () => {
    const props = {
      onChange: jest.fn(),
      color: 'red',
      opened: true,
    };
    const component = renderer.create(<ColorPicker {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
