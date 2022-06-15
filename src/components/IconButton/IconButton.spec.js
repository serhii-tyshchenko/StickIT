import renderer from 'react-test-renderer';

import IconButton from './index';

describe('IconButton', () => {
  it('renders correctly', () => {
    const props = {
      onClick: jest.fn(),
      icon: 'plus',
    };
    const component = renderer.create(<IconButton {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
