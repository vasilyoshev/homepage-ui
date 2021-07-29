import { render } from 'utils';
import { PrivateRoute } from './PrivateRoute';

describe('PrivateRoute', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<PrivateRoute />);

    expect(asFragment()).toMatchSnapshot();
  });
});
