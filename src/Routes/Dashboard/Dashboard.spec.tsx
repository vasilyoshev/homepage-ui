import { Dashboard } from './Dashboard';
import { render } from 'utils';

describe('Dashboard', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<Dashboard />);

    expect(asFragment()).toMatchSnapshot();
  });
});
